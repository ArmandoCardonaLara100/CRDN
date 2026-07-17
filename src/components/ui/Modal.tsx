"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { EASE } from "@/lib/motion";

interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Accessible dialog title (visually hidden). */
  title: string;
  children: React.ReactNode;
  contentClassName?: string;
  dark?: boolean;
  onKeyDown?: (e: React.KeyboardEvent) => void;
}

/**
 * Accessible modal base: Radix handles focus trapping, escape and labelling;
 * Framer Motion handles the enter/exit choreography.
 */
export function Modal({
  open,
  onOpenChange,
  title,
  children,
  contentClassName = "",
  dark = false,
  onKeyDown,
}: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                className="fixed inset-0 z-[90] bg-night/55 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.25 } }}
                transition={{ duration: 0.35 }}
              />
            </Dialog.Overlay>
            <Dialog.Content
              asChild
              forceMount
              aria-describedby={undefined}
              onKeyDown={onKeyDown}
            >
              <motion.div
                className={`fixed z-[100] ${contentClassName}`}
                initial={{ opacity: 0, y: 36, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{
                  opacity: 0,
                  y: 20,
                  scale: 0.99,
                  transition: { duration: 0.28, ease: EASE },
                }}
                transition={{ duration: 0.5, ease: EASE }}
              >
                <Dialog.Title className="sr-only">{title}</Dialog.Title>
                {children}
                <Dialog.Close asChild>
                  <button
                    type="button"
                    aria-label="Close dialog"
                    className={`absolute right-4 top-4 z-10 flex size-11 cursor-pointer items-center justify-center rounded-full border backdrop-blur transition-all duration-300 ease-studio hover:rotate-90 ${
                      dark
                        ? "border-bone/30 bg-night/40 text-bone hover:bg-bone hover:text-ink"
                        : "border-ink/20 bg-bone/70 text-ink hover:bg-ink hover:text-bone"
                    }`}
                  >
                    <X size={18} strokeWidth={1.5} aria-hidden="true" />
                  </button>
                </Dialog.Close>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
