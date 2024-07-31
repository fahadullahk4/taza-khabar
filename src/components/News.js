import React from "react";
import NewsItem from "./NewsItem";

export default function News() {
	return (
		<div className="container my-3">
			<h1 className="text-center mb-4">Taza Khabar - Top Headlines</h1>
			<div className="row">
				<div className="col-md-4">
					<NewsItem
						title="title"
						description="description"
						imgUrl="https://deadline.com/wp-content/uploads/2024/07/MixCollage-31-Jul-2024-01-22-PM-1191.jpg?w=1024"
						newsUrl="TODO"
					/>
				</div>
				<div className="col-md-4">
					<NewsItem title="title" description="description" />
				</div>
				<div className="col-md-4">
					<NewsItem title="title" description="description" />
				</div>
			</div>
		</div>
	);
}
