import AxiomTradeTable from '../components/AxiomTradeTable.tsx'; 

// This is the root page component. It is a Server Component, responsible 
// only for importing and rendering the Client Component (AxiomTradeTable).
export default function Home() {
  return (
    // We use a completely minimal structure to ensure no default Next.js styling interferes.
    <main>
      <AxiomTradeTable />
    </main>
  );
}