import StoreHeader from "../../components/storefront/StoreHeader";
import StoreBanner from "../../components/storefront/StoreBanner";
import ProductGrid from "../../components/storefront/ProductGrid";

export default function Storefront() {
  return (
    <div className="min-h-screen bg-slate-950">
      <StoreHeader />
      <StoreBanner />
      <ProductGrid />
    </div>
  );
}
