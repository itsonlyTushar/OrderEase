import * as Dialog from "@radix-ui/react-dialog";

export default function MyDialog({ dialogTitle, dialogContent, dialogFunction, isOpen, setIsOpen }) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button onClick={() => setIsOpen(true)} className="bg-blackBg text-white px-4 py-2 rounded-lg flex items-center gap-2">
          {dialogTitle}
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/50 fixed inset-0 z-40" />
        <Dialog.Content className="bg-white rounded-3xl p-6 shadow-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-[120vw] max-w-2xl">
          <Dialog.Title className="text-3xl font-semibold mb-4">
            {dialogTitle}
          </Dialog.Title>

        {dialogContent}

          <div className="flex justify-end mt-6">
            <Dialog.Close asChild>
              <button onClick={dialogFunction} className="bg-blackBg text-white px-4 py-2 rounded-xl hover:bg-mainBg hover:text-blackBg transition">
                Save changes
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
