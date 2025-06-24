import React from 'react'
import {Container, Grid} from "@mui/material";
import CategoryItem from "@/components/CategoryItem";

async function CategoryList() {
    const data = await  fetch('https://dummyjson.com/products/category-list');
    const categories = await data.json();
    const categoryList = categories.slice(0,6)
    console.log(categoryList)
    return (
        <>
            <Container>
                <Grid container >
                    {
                        categoryList.map((category, index) => (
                              <React.Fragment key={index}>
                                  {/*<Grid  size={{xs:12, sm:6, lg:3}}>*/}
                                  {/*    {*/}
                                  {/*        category*/}
                                  {/*    }*/}
                                  {/*</Grid>*/}
                                  <CategoryItem category={category} index={index} />
                              </React.Fragment>
                        ))
                    }


                </Grid>
            </Container>
        </>
    )
}

export default CategoryList
