"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Monitor, ExternalLink, RefreshCw, Maximize2, Globe } from "lucide-react";
import Link from "next/link";

interface LiveDemoEmbedProps {
  url: string;
  title: string;
}

export const LiveDemoEmbed = ({ url, title }: LiveDemoEmbedProps) => {
  const [key, setKey] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const reload = () => {
    setKey((k) => k + 1);
    setIsLoading(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={`flex flex-col rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-background ${
        isFullscreen ? "fixed inset-4 z-[9999]" : "w-full"
      }`}
      style={isFullscreen ? {} : { height: 480 }}
    >
      {/* Browser chrome bar */}
      <div className="shrink-0 flex items-center gap-3 px-4 py-2.5 bg-white/5 border-b border-white/10 backdrop-blur-sm">
        {/* Traffic lights */}
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
          <div className="w-3 h-3 rounded-full bg-green-400/80" />
        </div>

        {/* URL bar */}
        <div className="flex-1 flex items-center gap-2 bg-white/5 rounded-md px-3 py-1 border border-white/10">
          <Globe className="w-3 h-3 text-muted-foreground shrink-0" />
          <span className="text-xs text-muted-foreground font-mono truncate">{url}</span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={reload}
            className="p-1.5 rounded-md hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors"
            title="Reload"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setIsFullscreen((f) => !f)}
            className="p-1.5 rounded-md hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors"
            title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-md hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors"
            title="Open in new tab"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* iframe wrapper */}
      <div className="relative flex-1 bg-white">
        {/* Loading skeleton */}
        <AnimatePresence>
          {isLoading && (
            <motion.div
              key="loader"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-background"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              >
                <Monitor className="w-8 h-8 text-primary" />
              </motion.div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-sm font-medium text-foreground">Loading {title}</span>
                <span className="text-xs text-muted-foreground font-mono">{url}</span>
              </div>
              {/* Shimmer bars */}
              <div className="w-64 flex flex-col gap-2 mt-2">
                {[80, 60, 90, 45].map((w, i) => (
                  <motion.div
                    key={i}
                    className="h-2 rounded-full bg-white/10"
                    style={{ width: `${w}%` }}
                    animate={{ opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.15 }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <iframe
          key={key}
          src={url}
          title={title}
          className="w-full h-full border-0"
          onLoad={() => setIsLoading(false)}
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
          style={{ minHeight: isFullscreen ? "calc(100vh - 100px)" : 436 }}
        />
      </div>
    </motion.div>
  );
};
