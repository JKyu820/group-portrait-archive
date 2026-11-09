type Row = {
  slots: number[]
  left: number
  right: number
  y: number
}

type Placement = {
  x: number
  y: number
  scale: number
  layer: number
}

// Rows are listed from the back to the front. Coordinates are percentages of
// the stage, anchored to the center of each card. Front rows sit slightly
// lower, larger, and above the back rows.
function arrangeRows(rows: Row[], baseScale: number, stepScale: number) {
  const positions: Record<number, Placement> = {}
  rows.forEach(({ slots, left, right, y }, depth) => {
    slots.forEach((slot, index) => {
      const fraction = slots.length > 1 ? index / (slots.length - 1) : 0.5
      const center = 1 - Math.abs(fraction * 2 - 1)
      positions[slot] = {
        x: left + (right - left) * fraction,
        y: y + center * 1.2 + (index % 2 ? -0.9 : 0.7),
        scale: baseScale + depth * stepScale + center * 0.03,
        layer: depth + 1,
      }
    })
  })
  return positions
}

export const desktopPositions = arrangeRows([
  { slots: [6, 17, 1, 15, 13, 16, 24], left: 14, right: 86, y: 26 },
  { slots: [7, 14, 11, 19, 22, 25, 21], left: 12, right: 88, y: 42 },
  { slots: [20, 2, 18, 12, 10, 23, 26], left: 10, right: 90, y: 58 },
  { slots: [8, 3, 4, 5, 9, 27, 28], left: 12, right: 88, y: 75 },
], 0.88, 0.04)

export const mobilePositions = arrangeRows([
  { slots: [6, 17, 1, 13, 16, 24], left: 17, right: 83, y: 24 },
  { slots: [7, 14, 15, 22, 21, 25], left: 14, right: 86, y: 37 },
  { slots: [20, 11, 18, 12, 10, 26], left: 11, right: 89, y: 50 },
  { slots: [2, 8, 19, 23, 27], left: 16, right: 84, y: 63 },
  { slots: [3, 9, 4, 5, 28], left: 17, right: 83, y: 77 },
], 0.86, 0.04)

export type { Placement }
