import React from "react";
import {useRouter} from "next/router";
import css from "./blogPage.module.css";
import Head from "next/head";

export const BlogPage = props => {
    // console.log(props)
    const router = useRouter();
    // console.log(router)
    return (
        <>
            <Head>
                <title>{props.title}</title>
            </Head>
            <div className={css.desc}>
                <div >
                    <img className={css.post__image} src={props.thumbnail} />
                </div>
                <h1>{props.title}</h1>
                <h2>{props.category}</h2>
                <p>{props.description}</p>
                <div>
                    <p>Discount: {props.discountPercentage} %</p>
                    <p>Price: {props.price} $</p>
                    <p>Rating: {props.rating}/5</p>
                </div>
            </div>
        </>
    )
};
export async function getStaticProps(context) {
    console.log(context)

    const pageId = context.params.id;
    const page = await fetch(`https://dummyjson.com/products/${pageId}`)
        .then(res => res.json());
    // console.log(page, pageId)
    return {
        props: page,
    }

}
export async function getStaticPaths(context) {
    const pageLength = await fetch('https://dummyjson.com/products?limit=10')
        .then(res => res.json())
        .then((data) =>  data.limit);

    const res = Array.from(pageLength).map((el, i) => {
        return { params: { id: String(i) } }
    })
    console.log(res, pageLength)
    return {
        paths: res,
        fallback: false,
    }
}

export default BlogPage;