import React from "react";
import {Layout} from "../components/Layout/Layout";
import {Nav} from "../components/Header/Nav/Nav";
import css from "./index.module.css";
import {Button} from "../components/UI/Button/Button";
import {Card} from "../components/Cards/Card";


const IndexPage = ({data}) => {
    console.log(data)
    return (
        <Layout title="Main">
            <header>
                <Nav/>
            </header>
            <main className={css.main}>
                <div className={css.main__title}>
                    <h1 className={css.main__logo}>My first blog</h1>
                    <Button>Lets read</Button>
                </div>
                <section className={css.cards}>
                    {data.map((el, id) => (
                            <Card key={id} {...el}  />
                        )
                    )}
                </section>
            </main>
        </Layout>
    )
}


export async function getStaticProps(context) {
    // const result = await fetch("https://jsonplaceholder.typicode.com/posts")
    //     .then(res => res.json())
    //     .catch(err => console.error(err));
    //     if(!Array.isArray(result)) {
    //         return {
    //             props: {
    //                 data:['no arr',result],
    //             },
    //             revalidate: 100,
    //         }
    //     }

    let result = await fetch('https://dummyjson.com/products?limit=10')
        .then(res => res.json())
        .then((data) =>  data.products)
        .catch(err => console.error(err, 'error'));
    result = result.map(a => ({...a, data: ''}));
    if(!Array.isArray(result)) {
        return {
            props: {
                data: [],
            },
            revalidate: 100,
        }
    }
    return {
        props: {
            data:[...result],
        },
        revalidate: 100,
    };
}






export default IndexPage;