import { useState } from "react";
import { 
  ArrowLeft, 
  Plus, 
  Edit, 
  Trash2, 
  Save,
  Package
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { Link } from "react-router-dom";

interface Product {
  id: string;
  name: string;
  category: string;
  minPrice: string;
  maxPrice: string;
  stock: string;
  unit: string;
  specifications: string;
  isEditing: boolean;
}

const initialProducts: Product[] = [
  {
    id: "1",
    name: "TMT Steel Bars Fe-500D",
    category: "Steel",
    minPrice: "52000",
    maxPrice: "55000",
    stock: "500",
    unit: "Tons",
    specifications: "12mm, 16mm, 20mm diameter",
    isEditing: false
  },
  {
    id: "2",
    name: "MS Plates 10mm",
    category: "Steel",
    minPrice: "54000",
    maxPrice: "57000",
    stock: "200",
    unit: "Tons",
    specifications: "Width: 1250mm, Length: 6000mm",
    isEditing: false
  },
  {
    id: "3",
    name: "Steel Angles 50x50mm",
    category: "Steel",
    minPrice: "48000",
    maxPrice: "51000",
    stock: "150",
    unit: "Tons",
    specifications: "Thickness: 5mm, 6mm",
    isEditing: false
  },
  {
    id: "4",
    name: "HR Coils 2mm",
    category: "Steel",
    minPrice: "56000",
    maxPrice: "59000",
    stock: "300",
    unit: "Tons",
    specifications: "Width: 1000mm - 1500mm",
    isEditing: false
  }
];

const SupplierCatalog = () => {
  const [products, setProducts] = useState(initialProducts);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    minPrice: "",
    maxPrice: "",
    stock: "",
    unit: "Tons",
    specifications: ""
  });

  const toggleEdit = (id: string) => {
    setProducts(products.map(p => 
      p.id === id ? { ...p, isEditing: !p.isEditing } : p
    ));
  };

  const updateProduct = (id: string, field: keyof Product, value: string) => {
    setProducts(products.map(p => 
      p.id === id ? { ...p, [field]: value } : p
    ));
  };

  const deleteProduct = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const addProduct = () => {
    if (newProduct.name && newProduct.category) {
      setProducts([...products, {
        ...newProduct,
        id: Date.now().toString(),
        isEditing: false
      }]);
      setNewProduct({
        name: "",
        category: "",
        minPrice: "",
        maxPrice: "",
        stock: "",
        unit: "Tons",
        specifications: ""
      });
      setShowAddForm(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar type="supplier" />
      
      <main className="p-8 pl-20">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link to="/supplier/dashboard">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Product Catalog</h1>
              <p className="text-muted-foreground">Manage your products and pricing</p>
            </div>
          </div>
          <Button variant="cta" onClick={() => setShowAddForm(true)}>
            <Plus className="w-4 h-4" />
            Add New Product
          </Button>
        </div>

        {/* Add Product Form */}
        {showAddForm && (
          <div className="card-elevated p-6 mb-6">
            <h3 className="font-semibold text-foreground mb-4">Add New Product</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <Label className="text-xs text-muted-foreground">Product Name</Label>
                <Input
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  placeholder="e.g., TMT Steel Bars"
                  className="mt-1"
                />
              </div>
              <div>
                <Label className="text-xs text-muted-foreground">Category</Label>
                <Input
                  value={newProduct.category}
                  onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                  placeholder="e.g., Steel"
                  className="mt-1"
                />
              </div>
              <div>
                <Label className="text-xs text-muted-foreground">Specifications</Label>
                <Input
                  value={newProduct.specifications}
                  onChange={(e) => setNewProduct({ ...newProduct, specifications: e.target.value })}
                  placeholder="e.g., 12mm, 16mm"
                  className="mt-1"
                />
              </div>
              <div>
                <Label className="text-xs text-muted-foreground">Min Price (₹)</Label>
                <Input
                  type="number"
                  value={newProduct.minPrice}
                  onChange={(e) => setNewProduct({ ...newProduct, minPrice: e.target.value })}
                  placeholder="52000"
                  className="mt-1"
                />
              </div>
              <div>
                <Label className="text-xs text-muted-foreground">Max Price (₹)</Label>
                <Input
                  type="number"
                  value={newProduct.maxPrice}
                  onChange={(e) => setNewProduct({ ...newProduct, maxPrice: e.target.value })}
                  placeholder="55000"
                  className="mt-1"
                />
              </div>
              <div>
                <Label className="text-xs text-muted-foreground">Stock Available</Label>
                <div className="flex gap-2 mt-1">
                  <Input
                    type="number"
                    value={newProduct.stock}
                    onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                    placeholder="500"
                    className="flex-1"
                  />
                  <Input
                    value={newProduct.unit}
                    onChange={(e) => setNewProduct({ ...newProduct, unit: e.target.value })}
                    placeholder="Tons"
                    className="w-24"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-4">
              <Button variant="outline" onClick={() => setShowAddForm(false)}>Cancel</Button>
              <Button variant="cta" onClick={addProduct}>
                <Save className="w-4 h-4" />
                Save Product
              </Button>
            </div>
          </div>
        )}

        {/* Products List */}
        <div className="space-y-4">
          {products.map((product) => (
            <div key={product.id} className="card-elevated p-5">
              {product.isEditing ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div>
                    <Label className="text-xs text-muted-foreground">Product Name</Label>
                    <Input
                      value={product.name}
                      onChange={(e) => updateProduct(product.id, "name", e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label className="text-xs text-muted-foreground">Category</Label>
                    <Input
                      value={product.category}
                      onChange={(e) => updateProduct(product.id, "category", e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label className="text-xs text-muted-foreground">Specifications</Label>
                    <Input
                      value={product.specifications}
                      onChange={(e) => updateProduct(product.id, "specifications", e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label className="text-xs text-muted-foreground">Min Price (₹)</Label>
                    <Input
                      type="number"
                      value={product.minPrice}
                      onChange={(e) => updateProduct(product.id, "minPrice", e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label className="text-xs text-muted-foreground">Max Price (₹)</Label>
                    <Input
                      type="number"
                      value={product.maxPrice}
                      onChange={(e) => updateProduct(product.id, "maxPrice", e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label className="text-xs text-muted-foreground">Stock Available</Label>
                    <div className="flex gap-2 mt-1">
                      <Input
                        type="number"
                        value={product.stock}
                        onChange={(e) => updateProduct(product.id, "stock", e.target.value)}
                        className="flex-1"
                      />
                      <Input
                        value={product.unit}
                        onChange={(e) => updateProduct(product.id, "unit", e.target.value)}
                        className="w-24"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2 lg:col-span-3 flex justify-end">
                    <Button variant="cta" size="sm" onClick={() => toggleEdit(product.id)}>
                      <Save className="w-4 h-4" />
                      Save Changes
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <Package className="w-5 h-5 text-accent" />
                        <h4 className="font-semibold text-foreground">{product.name}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {product.category} • {product.specifications}
                      </p>
                    </div>
                    <span className="font-medium text-foreground">
                      ₹{parseInt(product.minPrice).toLocaleString()} - ₹{parseInt(product.maxPrice).toLocaleString()}/{product.unit}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-1 rounded-full bg-success/10 text-success text-xs font-medium">
                      In Stock: {product.stock} {product.unit}
                    </span>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" onClick={() => toggleEdit(product.id)}>
                        <Edit className="w-4 h-4" />
                        Edit
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-destructive"
                        onClick={() => deleteProduct(product.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                        Remove
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default SupplierCatalog;
