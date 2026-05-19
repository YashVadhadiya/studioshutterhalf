import { useQuotationStore } from '../store/useQuotationStore'
import { AVAILABLE_POST_PRODUCTION } from '../constants/services'
import { Card, CardBody, CardHeader } from './ui/Card'
import { Badge } from './ui/Badge'
import { Film, Minus, Plus } from 'lucide-react'

export function PostProductionSection() {
  const items = useQuotationStore((s) => s.postProduction)
  const toggleItem = useQuotationStore((s) => s.togglePostProduction)
  const updateQuantity = useQuotationStore((s) => s.updatePostProductionQuantity)

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center">
            <Film className="w-5 h-5 text-brand-700" />
          </div>
          <div>
            <h2 className="text-lg font-display font-semibold text-ink-800">Post Production</h2>
            <p className="text-xs text-ink-400">Select deliverables and set quantities</p>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs text-ink-400">
            Check the items to include in the quotation
          </p>
          <Badge variant="brand">
            {items.length} selected
          </Badge>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
          {AVAILABLE_POST_PRODUCTION.map((pp) => {
            const isSelected = items.some((i) => i.name === pp.name)
            const selectedItem = items.find((i) => i.name === pp.name)

            return (
              <div
                key={pp.name}
                className={`flex items-center gap-2 p-2 rounded-lg border transition-all duration-150 cursor-pointer ${
                  isSelected
                    ? 'border-brand-300 bg-brand-50'
                    : 'border-transparent hover:border-ink-200 hover:bg-ink-50'
                }`}
                onClick={() => toggleItem(pp.name)}
              >
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => {}}
                  className="w-4 h-4 rounded border-ink-300 text-brand-600 focus:ring-brand-400"
                />
                <div className="flex-1 min-w-0">
                  <span className="block text-sm text-ink-700 truncate">{pp.name}</span>
                  <span className="block text-[10px] text-ink-400">{pp.category}</span>
                </div>
                {isSelected && selectedItem && (
                  <div className="flex items-center gap-1 shrink-0" onClick={(e) => e.stopPropagation()}>
                    <button
                      type="button"
                      onClick={() => updateQuantity(pp.name, selectedItem.quantity - 1)}
                      disabled={selectedItem.quantity <= 1}
                      className="p-0.5 rounded text-ink-400 hover:text-ink-700 hover:bg-ink-100 disabled:opacity-30 transition-colors"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-6 text-center text-xs font-semibold text-ink-800 tabular-nums">
                      {selectedItem.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(pp.name, selectedItem.quantity + 1)}
                      className="p-0.5 rounded text-ink-400 hover:text-ink-700 hover:bg-ink-100 transition-colors"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </CardBody>
    </Card>
  )
}
