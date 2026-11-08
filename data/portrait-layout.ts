type Row = {
  slots: number[]
  left: number
  right: number
  bottom: number
  scale: number
}

type Placement = {
  x: number
  y: number
  scale: number
  layer: number
}

// Rows are listed from the back to the front. Coordinates are percentages
// of the stage, anchored to the bottom center of each portrait.
function arrangeRows(rows: Row[]) {
  const positions: Record<number, Placement> = {}
  rows.forEach(({ slots, left, right, bottom, scale }, depth) => {
    slots.forEach((slot, index) => {
      const fraction = slots.length > 1 ? index / (slots.length - 1) : 0.5
      const center = 1 - Math.abs(fraction * 2 - 1)
      positions[slot] = {
        x: left + (right - left) * fraction,
        y: bottom + center * 1.6 + (index % 2 ? -0.6 : 0.4),
        scale: scale + center * 0.06,
        layer: depth + 1,
      }
    })
  })
  return positions
}

export const desktopPositions = arrangeRows([
  { slots: [6, 17, 1, 15, 13, 16], left: 21, right: 79, bottom: 36, scale: 0.83 },
  { slots: [7, 14, 11, 19, 22, 25, 21], left: 14, right: 86, bottom: 54, scale: 0.88 },
  { slots: [20, 2, 18, 12, 10, 23, 24], left: 11, right: 89, bottom: 72, scale: 0.94 },
  { slots: [8, 3, 4, 5, 9, 26], left: 16.5, right: 83.5, bottom: 91.5, scale: 1.01 },
])

export const mobilePositions = arrangeRows([
  { slots: [6, 17, 1, 13, 16], left: 17, right: 83, bottom: 29, scale: 0.84 },
  { slots: [7, 14, 15, 22, 21], left: 14, right: 86, bottom: 45, scale: 0.87 },
  { slots: [20, 11, 18, 12, 25, 24], left: 11, right: 89, bottom: 61, scale: 0.91 },
  { slots: [2, 8, 10, 19, 23], left: 15, right: 85, bottom: 77, scale: 0.96 },
  { slots: [3, 9, 4, 5, 26], left: 14, right: 86, bottom: 93, scale: 1.01 },
])

export type { Placement }
