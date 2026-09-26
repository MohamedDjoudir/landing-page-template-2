import type { MegaMenuData } from "../types";
import { MegaMenuColumn } from "./MegaMenuColumn";
import { MegaMenuFeatured } from "./MegaMenuFeatured";

interface MegaMenuProps {
  data: MegaMenuData;
}

export function MegaMenu({ data }: MegaMenuProps) {
  return (
    <div className="max-w-4xl w-full px-4 py-6 animate-fade">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.columns.map((column) => (
            <MegaMenuColumn key={column.id} menuId={data.id} column={column} />
          ))}
        </div>
        <div className="col-span-1">
          <MegaMenuFeatured menu={data} />
        </div>
      </div>
    </div>
  );
}
