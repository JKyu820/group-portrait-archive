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
        y: y + center * 1 + (index % 2 ? -0.55 : 0.45),
        scale: baseScale + depth * stepScale + center * 0.03,
        layer: depth + 1,
      }
    })
  })
  return positions
}

export const desktopPositions = arrangeRows([
  { slots: [6, 17, 1, 15, 13, 16, 24], left: 15, right: 85, y: 24 },
  { slots: [7, 14, 11, 19, 22, 25, 21], left: 13, right: 87, y: 42 },
  { slots: [20, 2, 18, 12, 10, 23, 26], left: 11, right: 89, y: 60 },
  { slots: [8, 3, 4, 5, 9, 27, 28], left: 13, right: 87, y: 78 },
], 0.84, 0.05)

export const mobilePositions = arrangeRows([
  { slots: [6, 17, 1, 13, 16, 24], left: 17, right: 83, y: 21 },
  { slots: [7, 14, 15, 22, 21, 25], left: 14, right: 86, y: 36 },
  { slots: [20, 11, 18, 12, 10, 26], left: 11, right: 89, y: 51 },
  { slots: [2, 8, 19, 23, 27], left: 16, right: 84, y: 66 },
  { slots: [3, 9, 4, 5, 28], left: 17, right: 83, y: 81 },
], 0.82, 0.045)

export type { Placement }
