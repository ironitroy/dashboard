import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";


const ProductsPage = () => {
  return (
    <div className="h-screen">
              <header className="bg-white shadow lg:fixed top-0 left-0 right-0 lg:ml-[256px] z-10 lg:pt-0 pt-[60px]">
        <div class="px-4 py-6 sm:px-12 flex flex-row justify-between items-center">
          <h1 class="text-2xl font-bold tracking-tight text-gray-900">Products</h1>
         
          <button class="bg-[#523EF3] text-xs rounded px-3 py-2 ml-4 text-white h-[38px] hover:bg-[#4633DE] flex items-center">
            <div class="pr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 13.36 13.36"
              >
                <path
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.3"
                  d="M.65 6.68h12.06M6.68.65v12.06"
                  data-name="plus-large-svgrepo-com (2)"
                ></path>
              </svg>
            </div>
            Add Product
          </button>
        </div>
      </header>

      <div className="lg:pt-[86px] lg:h-full h-[70vh]  ">
     <div className="px-4 py-6 sm:px-12">
     <Table>
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead className="hidden lg:table-cell">Roles</TableHead>
          <TableHead className="hidden lg:table-cell">Password Last Updated</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
     
    </Table>
      <div className="border-b border-[#f0f0f0]">
      <div className="mx-2 py-8 w-full grid justify-items-center ">
      <svg width="64" height="41" viewBox="0 0 64 41" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0 1)" fill="none" fill-rule="evenodd"><ellipse fill="#f5f5f5" cx="32" cy="33" rx="32" ry="7"></ellipse><g fill-rule="nonzero" stroke="#d9d9d9"><path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"></path><path d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z" fill="#fafafa"></path></g></g></svg>
      <div className="text-sm text-[#00000040]">No Data</div>
      </div>
      </div>
     </div>
     </div>
    </div>
  )
}

export default ProductsPage