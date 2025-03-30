import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

// Async Thunk to fetch products by collection
export const fetchProductByFilter = createAsyncThunk(
    "product/fetchByFilter",
    async ({
        collection,
        minPrice,
        maxPrice,
        sortBy,
        search,
        brand,
        limit,
    }) => {
        const query = new URLSearchParams();
        if (collection) query.append("collection", collection);
        if (minPrice) query.append("minPrice", minPrice);
        if (maxPrice) query.append("maxPrice", maxPrice);
        if (sortBy) query.append("sortBy", sortBy);
        if (search) query.append("search", search);
        if (brand) query.append("brand", brand);
        if (limit) query.append("limit", limit);

        const response = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/api/product?${query.toString()}`
        );
        return response.data;
    }
)

// Async thunk to fetch a single product by id
export const fetchProductDetails = createAsyncThunk(
    "product/fetchProductDetails",
    async (id) => {
        const response = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/api/product/${id}`
        );
        return response.data;
    }
)

// Async thunk to update product
export const updateProduct = createAsyncThunk(
    "product/updateProduct",
    async ({ id, productData }) => {
        const response = await axios.put(
            `${import.meta.env.VITE_BACKEND_URL}/api/product/${id}`,
            productData,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("userToken")}`,
                },
            }
        );
        return response.data;
    }
)

const productSlice = createSlice({
    name: "product",
    initialState: {
        product: [],
        selectedProduct: null, // Store the details of the single Product
        loading: false,
        error: null,
        filter: {
            brand: "",
            minPrice: "",
            maxPrice: "",
            sortBy: "",
            search: "",
            collection: ""
        },
    },
    reducers: {
        setFilter: (state, action) => {
            state.filter = { ...state.filter, ...action.payload };
        },
        clearFilter: (state) => {
            state.filter = {
                brand: "",
                minPrice: "",
                maxPrice: "",
                sortBy: "",
                search: "",
                collection: ""
            };
        },
    },
    extraReducers: (builder) => {
        builder
            // handle fetching products with filter
            .addCase(fetchProductByFilter.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProductByFilter.fulfilled, (state, action) => {
                state.loading = false;
                state.product = Array.isArray(action.payload) ? action.payload : [];
            })
            .addCase(fetchProductByFilter.rejected, (state, action) => {
                state.loading = false;
                state.error - action.error.message;
            })
            //  Handle fetching single product details
            .addCase(fetchProductDetails.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProductDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedProduct = action.payload;
            })
            .addCase(fetchProductDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            //   Handle updating product
            .addCase(updateProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                state.loading = false;
                const updatedProduct = action.payload;
                const index = state.product.findIndex(
                    (product) => product._id === updateProduct.id
                );
                if (index !== -1) {
                    state.product[index] = updatedProduct;
                }
            })
            .addCase(updateProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
})

export const { setFilter, clearFilter } = productSlice.actions;
export default productSlice.reducer;