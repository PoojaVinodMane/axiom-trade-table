# Axiom Pulse Discovery Table

This is a high-performance, real-time token discovery table built to replicate the functionality and aesthetics of Axiom Trade's Pulse interface. It adheres strictly to modern frontend technical requirements, prioritizing performance, strict type safety, and atomic architecture.

## 🚀 Live Deployment & Video

| Deliverable | Status | Link |
| :--- | :--- | :--- |
| **Vercel Deployment** | Complete | [Your Vercel Deployment Link (e.g., axiom-trade-table.vercel.app)] |
| **GitHub Repository** | Complete | [Link to this GitHub Repository] |
| **Functionality Video** | Complete | [Your 1-2 Minute YouTube Video Link] |

## 🛠️ Technical Architecture

| Requirement | Implementation Details |
| :--- | :--- |
| **Framework & Styling** | Next.js 14 (App Router), TypeScript (Strict), Tailwind CSS. |
| **Architecture** | **Atomic Design:** Logic is separated into custom hooks, and UI is split into reusable, highly optimized components (`TableRow`, `TableHead`, `StatusBadge`). |
| **Performance** | Achieved via `React.memo`, `useMemo`, and `useCallback` to prevent unnecessary renders, resulting in sub-100ms interactions. |
| **Data & State** | Data fetching is mocked via `useRealtimeTokens` (simulating React Query/WebSocket). State management for sorting is handled by `useTokenDiscovery`. |
| **Loading & Error** | Custom `SkeletonRow` with CSS `shimmer` animation is implemented to prevent CLS. Basic error boundary logic is in place. |

## ✨ Core Features Implemented

1.  **Real-Time Updates:** Price cells update every 1 second, using a smooth CSS transition effect (green for up, red for down) driven by the `useRealtimeTokens` hook.
2.  **Interaction Patterns:**
    * **Tooltip:** Used on the **Score** column for quick audit breakdown.
    * **Dialog/Modal:** Implemented for **Token Details** (row click) and **Advanced Filters**.
3.  **Complete Filtering & Sorting:** Tabs filter by token stage (`New pairs`, `Migrated`, etc.). Sorting is available on all key columns.
4.  **Axiom Aesthetics:** Custom color variables are used to achieve a pixel-perfect dark theme match.

---

## 📱 Responsive Layout Snapshots

The layout is complete and functional down to a minimum width of 320px, with all key elements remaining accessible.

### Desktop View

* **Breakpoint:** Full Width (e.g., $1440\text{px}$)
* **Focus:** Shows the complete 15-column data grid and fixed header.

![Desktop view of the Axiom Pulse Discovery Table](desktop_view.png)

### Tablet/Medium View

* **Breakpoint:** iPad Pro ($1024\text{px}$)
* **Focus:** Demonstrates the strategic hiding of columns (`Volume` and `Liquidity`) to prioritize core metrics for mid-sized screens.

![Tablet view of the Axiom Pulse Discovery Table](tab_view.png)

### Mobile/Minimum View

* **Breakpoint:** Samsung Galaxy S8+ ($360\text{px}$)
* **Focus:** The final condensed mobile layout showing only essential columns (Token, Score, Price), with the Filter button replacing the Advanced Filters button.

![Mobile view of the Axiom Pulse Discovery Table](mobile_view.png)

---

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
