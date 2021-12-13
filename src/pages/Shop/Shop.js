import React, {useEffect} from "react";
import {
  ShopContent,
  SideBar,
  SideBarCategories,
  CategoryHeading,
  CategoryList,
  SidebarFilters,
  SidebarFilterHeading,
  ProductFilter,
  FilterHeading,
  MainContent,
  FilterBar,
  ProductsContainer,
  PageNav,
  SearchAndFilters,
  MobileFilterBar,
  MobileProducts,
  MobileFilterButton,
  MobileFilterOverlay,
  CloseOverlay,
} from "./Shop.elements.js";
import Stack from "@mui/material/Stack";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../redux/actions/products.js";
import { getCategory } from "../../redux/actions/category.js";
import CategoryListItem from "../../components/CategoryList.js";
import SmallCard from "../../components/SmallCard/SmallCard.js";
import { Card, Col, Collapse, Row } from "react-bootstrap";


const Shop = ({history, location}) => {

  const dispatch = useDispatch()

  let mobile = false;

  if (window.screen.width < 1000) {
    mobile = true;
  } else {
    mobile = false;
  }
  useEffect(() => {
    const query = new URLSearchParams(location.search)
    const page = query.get('page') || 1
    dispatch(getProduct(page))
    dispatch(getCategory())
  }, [])
  const productAll = useSelector((state) => state.products);
  const { productList } = productAll;

  const categoryAll = useSelector((state) => state.category);
  const { categoryList } = categoryAll;

  const overlayHandler = () => {
    if (document.getElementById("overlay").style.display === "block") {
      document.getElementById("overlay").style.display = "none";
    } else {
      document.getElementById("overlay").style.display = "block";
    }
  };

  const renderProduct = () =>{
    return productList.map((product, i) => {
      return (
        <Col className="mb-4" md = {3} sm = {6}>
        <Card>
          <Card.Body>
            <SmallCard product={product} key={i} />
          </Card.Body>
        </Card>
        </Col>
      )
    })
  }

  return (
    <>
        {mobile ? (
          <>
            <SearchAndFilters>
              <MobileFilterBar>
                <MobileFilterButton onClick={overlayHandler}>
                  Category Filters
                </MobileFilterButton>
                <MobileFilterOverlay id="overlay">
                  <CloseOverlay onClick={overlayHandler} />
                  <SideBarCategories>
                    <CategoryHeading>Browse Categories</CategoryHeading>
                    <CategoryList>
                      <CategoryListItem categories = {categoryList}/>
                    </CategoryList>
                  </SideBarCategories>
                  <SidebarFilters>
                    <SidebarFilterHeading>Product Filters</SidebarFilterHeading>
                    <ProductFilter>
                      <FilterHeading>Brand</FilterHeading>
                      <CategoryList>
                      </CategoryList>
                    </ProductFilter>
                    <ProductFilter>
                      <FilterHeading>Price</FilterHeading>
                      <CategoryList>
                      </CategoryList>
                    </ProductFilter>
                  </SidebarFilters>
                </MobileFilterOverlay>
              </MobileFilterBar>
            </SearchAndFilters>
            <MobileProducts>
              {renderProduct()}
              <PageNav>
                <Stack spacing={2}>
                </Stack>
              </PageNav>
            </MobileProducts>
          </>
        ) : (
          <>
            <ShopContent>
              <SideBar>
                <SideBarCategories>
                  <CategoryHeading>Browse Categories</CategoryHeading>
                  <CategoryList>
                  <CategoryListItem categories = {categoryList}/>
                  </CategoryList>
                </SideBarCategories>
                <SidebarFilters>
                  <SidebarFilterHeading>Product Filters</SidebarFilterHeading>
                  <ProductFilter>
                    <FilterHeading>Brand</FilterHeading>
                    <CategoryList>
                    </CategoryList>
                  </ProductFilter>
                  <ProductFilter>
                    <FilterHeading>Price</FilterHeading>
                    <CategoryList>
                    </CategoryList>
                  </ProductFilter>
                </SidebarFilters>
              </SideBar>
              <MainContent>
                <FilterBar>
                </FilterBar>
                <ProductsContainer>
                  <Row>
                  {renderProduct()}
                  </Row>
                  <PageNav>
                    <Stack spacing={2}>
                    </Stack>
                  </PageNav>
                </ProductsContainer>
              </MainContent>
            </ShopContent>
          </>
        )}
    </>
  );
};

export default Shop;
