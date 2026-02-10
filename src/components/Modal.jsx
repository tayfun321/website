import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { trapFocus } from '../utils/accessibility';

/**
 * Modal Component
 * Barrierefreier Dialog mit Fokus-Trap
 */
function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  showCloseButton = true,
  closeOnOverlayClick = true,
}) {
  const modalRef = useRef(null);
  const previousFocus = useRef(null);

  // Größen-Klassen
  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
    full: 'max-w-full mx-4',
  };

  // Fokus-Management
  useEffect(() => {
    if (isOpen) {
      // Speichere aktuellen Fokus
      previousFocus.current = document.activeElement;
      
      // Focus auf Modal setzen nach Animation
      const timer = setTimeout(() => {
        modalRef.current?.focus();
      }, 50);

      return () => clearTimeout(timer);
    } else {
      // Fokus zurücksetzen
      previousFocus.current?.focus();
    }
  }, [isOpen]);

  // Fokus-Trap
  useEffect(() => {
    if (isOpen && modalRef.current) {
      return trapFocus(modalRef.current);
    }
  }, [isOpen]);

  // Escape-Taste schließt Modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Scroll-Lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[500] overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity animate-fade-in"
        onClick={closeOnOverlayClick ? onClose : undefined}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div
          ref={modalRef}
          tabIndex={-1}
          className={`
            relative w-full ${sizeClasses[size]}
            bg-white rounded-2xl shadow-2xl
            transform transition-all animate-slide-up
            outline-none
          `}
        >
          {/* Header */}
          {title && (
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h2 id="modal-title" className="text-xl font-bold text-gray-900">
                {title}
              </h2>
              {showCloseButton && (
                <button
                  type="button"
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
                  aria-label="Schließen"
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>
              )}
            </div>
          )}

          {/* Close Button für Modal ohne Titel */}
          {!title && showCloseButton && (
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors z-10"
              aria-label="Schließen"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          )}

          {/* Content */}
          <div className="px-6 py-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
