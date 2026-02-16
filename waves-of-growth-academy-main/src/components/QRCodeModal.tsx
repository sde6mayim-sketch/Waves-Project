import { X } from "lucide-react";

const QRCodeModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
      <div className="bg-background rounded-3xl shadow-2xl max-w-sm w-full mx-auto relative transform transition-all duration-300 scale-100">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h3 className="font-display text-xl font-black text-foreground">Donate</h3>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-muted"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* QR Code Only */}
        <div className="p-6 text-center">
          <div className="w-64 h-64 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-lg">
            <div className="text-center">
              {/* Simple QR Code */}
              <div className="w-48 h-48 bg-black rounded-lg mx-auto flex items-center justify-center p-3">
                <div className="grid grid-cols-5 gap-1">
                  {/* QR Pattern */}
                  <div className="w-2 h-2 bg-white"></div>
                  <div className="w-2 h-2 bg-white"></div>
                  <div className="w-2 h-2 bg-white"></div>
                  <div className="w-2 h-2 bg-white"></div>
                  <div className="w-2 h-2 bg-white"></div>
                  <div className="w-2 h-2 bg-white"></div>
                  <div className="w-2 h-2 bg-black"></div>
                  <div className="w-2 h-2 bg-black"></div>
                  <div className="w-2 h-2 bg-white"></div>
                  <div className="w-2 h-2 bg-white"></div>
                  <div className="w-2 h-2 bg-white"></div>
                  <div className="w-2 h-2 bg-black"></div>
                  <div className="w-2 h-2 bg-white"></div>
                  <div className="w-2 h-2 bg-black"></div>
                  <div className="w-2 h-2 bg-white"></div>
                  <div className="w-2 h-2 bg-white"></div>
                  <div className="w-2 h-2 bg-black"></div>
                  <div className="w-2 h-2 bg-white"></div>
                  <div className="w-2 h-2 bg-black"></div>
                  <div className="w-2 h-2 bg-white"></div>
                  <div className="w-2 h-2 bg-white"></div>
                  <div className="w-2 h-2 bg-white"></div>
                  <div className="w-2 h-2 bg-black"></div>
                  <div className="w-2 h-2 bg-white"></div>
                  <div className="w-2 h-2 bg-black"></div>
                  <div className="w-2 h-2 bg-white"></div>
                  <div className="w-2 h-2 bg-white"></div>
                  <div className="w-2 h-2 bg-black"></div>
                  <div className="w-2 h-2 bg-white"></div>
                  <div className="w-2 h-2 bg-black"></div>
                  <div className="w-2 h-2 bg-white"></div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground font-medium mt-2">Scan to Donate</p>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground font-medium mt-4">UPI ID: wavesacademy@ybl</p>
          <p className="text-xs text-muted-foreground mt-2">Scan with any UPI app</p>
        </div>

        {/* Footer */}
        <div className="flex justify-end p-6 border-t border-border">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-lg border border-border text-foreground hover:bg-muted transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default QRCodeModal;
