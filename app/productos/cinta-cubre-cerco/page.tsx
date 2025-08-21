import CintaCubreCercoClient from "./CintaCubreCercoClient"
import { generateProductMetadata } from "../../metadata"

export const metadata = generateProductMetadata(
  "Cinta Cubre Cerco",
  "Protege y decora tu cerco perimetral con nuestra cinta cubre cerco de alta calidad. Disponible en varios colores y medidas.",
  "/images/products/cinta-cubre-cerco-main.jpeg",
)

export default function ProductPage() {
  return <CintaCubreCercoClient />
}
