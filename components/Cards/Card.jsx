import React from "react";
import css from "./Card.module.css";
import Link from "next/link";


export const Card = ({title, description, price, thumbnail, discountPercentage, id}) => {
    return (
        <div className={css.card}>
            <div className={css.card__image}>
                <img src={thumbnail} />
            </div>
            <div className={css.card__content}>
                <div className={css.card__about}>
                    <span>{price}$</span>
                    <span>{discountPercentage}%</span>
                </div>
                <Link href={`/blog/${id}`} className={css.card__description}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </Link>
            </div>
        </div>
    )
};