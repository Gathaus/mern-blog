import React, { Component } from 'react'
import BlogItemPage from "../parts/BlogItemPage/BlogItemPage";
import PortfolioWriteComment from "../parts/PortfolioWriteComment/PortfolioWriteComment";


class BlogItem extends Component {
    render() {
        return (
            <div>
                <BlogItemPage/>
                <PortfolioWriteComment/>
            </div>
        )
    }
}

export default BlogItem;
