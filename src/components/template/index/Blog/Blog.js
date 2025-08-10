import React from 'react';
import style from './Blog.module.css'
import Title from '@/components/modules/Title/Title';
import Link from 'next/link';
import { RiArrowLeftUpLine } from 'react-icons/ri';
import ArticleCart from '@/components/modules/ArticleCart/ArticleCart';

function Blog() {
  return (
    <section className={style.blog}>
        <div className="container">
            <div className={style.blog_wrapper}>
                <div className={style.blog_titleLink}>
                    <Title title="آخـــرین مقالات ما" text="مقاله های بروز برنامه نویسی و تکنولوژی"/>
                    <Link href='' className="link_hero">
                        <span className="text">همه مقالات ها</span>
                        <span className="icon"><RiArrowLeftUpLine/></span>
                    </Link>
                </div>
                <div className={style.blog_items}>
                    <ArticleCart/>
                    <ArticleCart/>
                    <ArticleCart/>
                    <ArticleCart/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blog