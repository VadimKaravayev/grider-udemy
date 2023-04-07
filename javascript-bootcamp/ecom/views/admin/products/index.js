const layout = require("../layout");

const productTemplate = (product) => `
<tr>
  <td>${product.title}</td>
  <td>${product.price}</td>
  <td>
    <a href="/admin/products/${product.id}/edit">
      <button class="button is-link">
        Edit
      </button>
    </a>
  </td>
  <td>
    <form method="POST" action="/admin/products/${product.id}/delete">
      <button class="button is-danger">Delete</button>
    </form>
  </td>
</tr>
`;

const productReducer = (acc, product) => acc.concat(productTemplate(product));

module.exports = ({ products }) => {
  const renderedProducts = products.reduce(productReducer, "");

  return layout({
    content: `
    <div class="control">
      <h1 class="subtitle">Products</h1>  
      <a href="/admin/products/new" class="button is-primary">New Product</a>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Price</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        ${renderedProducts}
      </tbody>
    </table>
  `,
  });
};
