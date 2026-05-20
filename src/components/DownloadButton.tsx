import { useState, type RefObject } from 'react'
import { useQuotationStore } from '../store/useQuotationStore'
import { Button } from './ui/Button'
import { generatePDF } from '../utils/pdfGenerator'
import { Download, Loader2 } from 'lucide-react'

interface DownloadButtonProps {
  previewRef: RefObject<HTMLDivElement | null>
}

export function DownloadButton({ previewRef }: DownloadButtonProps) {
  const [loading, setLoading] = useState(false)
  const clientName = useQuotationStore((s) => s.clientName)

  const handleDownload = async () => {
    setLoading(true)
    try {
      await generatePDF(previewRef, clientName)
    } catch (err) {
      console.error('PDF generation failed:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button
      variant="primary"
      size="md"
      onClick={handleDownload}
      disabled={loading}
      className="w-full sm:w-auto"
    >
      {loading ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Download className="w-4 h-4" />
          Download PDF
        </>
      )}
    </Button>
  )
}
