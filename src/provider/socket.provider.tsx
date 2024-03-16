"use client";
import { useLogs } from "@/store/logsStore";
import { useSocket } from "@/store/socketStore";
import React, { useEffect } from "react";
import { io as ClientIo } from "socket.io-client";

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
  const { setSocket, SetIsConnected } = useSocket();
  const { setLogs, appendLogs } = useLogs();

  useEffect(() => {
    const SocketInstance = new (ClientIo as any)(
      process.env.NEXT_PUBLIC_BASE_URL,
      {
        transports: ["websocket", "polling"],
      }
    );

    SocketInstance.on("connect", () => {
      console.log("connecyed");
      SetIsConnected(true);
    });
    SocketInstance.on("disconnect", () => {
      console.log("disconnecyed");
      SetIsConnected(false);
    });

    SocketInstance.emit("fetchLastLogsLines");

    SocketInstance.on("lastLogsLines", (data: string[]) => {
      setLogs(data);
    });

    SocketInstance.on("logs", (logs: string) => {
      console.log;
      appendLogs(logs);
    });

    setSocket(SocketInstance);

    return () => {
      SocketInstance.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>{children}</div>;
};

export default SocketProvider;
