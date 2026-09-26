import { footerColumns } from "./constants";
import {
  FooterBottomBar,
  FooterBrand,
  FooterLinkColumn,
} from "./components";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950 py-12">
      <div className="container px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <FooterBrand />
          {footerColumns.map((column) => (
            <FooterLinkColumn key={column.id} column={column} />
          ))}
        </div>
        <FooterBottomBar />
      </div>
    </footer>
  );
}
