// Cari total quantity dari bebarapa storageId untuk productCode FBR00040101 !

let productBin = {
  requestId: null,
  data: [
    {
      id: 100000057465,
      storageId: 10000008207,
      code: "A01-01-01-A",
      productId: 110000081009,
      productName: "FloBrand-DressBSPink",
      productCode: "FBR00040101",
      quantity: 76,
      createdTime: "2021-12-21T13:54:48Z",
    },
    {
      id: 100000057466,
      storageId: 10000002181,
      code: "A01-01-01-B",
      productId: 110000081009,
      productName: "FloBrand-DressBSPink",
      productCode: "FBR00040101",
      quantity: 71,
      createdTime: "2021-12-21T13:54:48Z",
    },
    {
      id: 100000065224,
      storageId: 10000008884,
      code: "Tgt00-A-A-01",
      productId: 110000081009,
      productName: "FloBrand-DressBSPink",
      productCode: "FBR00040101",
      quantity: 10,
      createdTime: "2022-02-08T10:35:19Z",
    },
  ],
  message: "success",
};

// Jawab
const productCode = "FBR00040101";

function getTotalQuantityByPC(data, code) {
  let totalQuantity = 0;

  for (const item of data) {
    if (item.productCode === code) {
      totalQuantity += item.quantity;
    }
  }
  return totalQuantity;
}

const totalQuantity = getTotalQuantityByPC(productBin.data, productCode);

console.log(
  `Total quantity untuk produk dengan spesifik productCode bernilai (${productCode}) adalah: ${totalQuantity}`
);
