import React, { Component } from 'react';

class Grid extends Component {
	render() {
		return (
			<div className="mt-5">
				<h4 >GRID WITH DIFFERENT COLUMN SIZE (Without responsive)</h4>
				<div className="row">
					<div className="col-3 bg-info">Column size 3</div>
					<div className="col-5 bg-secondary">Column size 5</div>
					<div className="col-4 bg-primary">Column size 4</div>
					<div className="col-6 bg-danger">Column size 6</div>
					<div className="col-2 bg-info">Column size 2</div>
					<div className="col-1 bg-secondary">Column size 1</div>
					<div className="col-3 bg-warning">Column size 3</div>
				</div>
				<h4 className='mt-5'>12 COLUMNS GRID (With responsive)</h4>
				<div className="row gx-0">
					<div className="col-1 bg-info">Column size 1</div>
					<div className="col-1 bg-secondary">Column size 1</div>
					<div className="col-1 bg-primary">Column size 1</div>
					<div className="col-1 bg-danger">Column size 1</div>
					<div className="col-1 bg-info">Column size 1</div>
					<div className="col-1 bg-secondary">Column size 1</div>
					<div className="col-1 bg-warning">Column size 1</div>
					<div className="col-1 bg-info">Column size 1</div>
					<div className="col-1 bg-secondary">Column size 1</div>
					<div className="col-1 bg-primary">Column size 1</div>
					<div className="col-1 bg-danger">Column size 1</div>
					<div className="col-1 bg-warning">Column size 1</div>
				</div>
				<h4 className='mt-5'>GRID WITH ADJUSTABLE GUTTER</h4>
				<div className="mt-4">
				<h5 className="text_left">Grid without gutter</h5>
					<div className='row gx-0'>
						<div className="col-6 bg-info">Column size 6 with 0 gutter</div>
						<div className="col-6 bg-warning">Column size 6 with 0 gutter</div>
						<div className="col-6 bg-danger">Column size 6 with 0 gutter</div>
						<div className="col-6 bg-success">Column size 6 with 0 gutter</div>
					</div>
				</div>

				<div className="mt-5">
				<h5 className="text_left">Grid with horizontal gutter</h5>
					<div className='row gx-5'>
						<div className="col-6"><div className="bg-info">Column with 5 vertical gutter</div></div>
						<div className="col-6"><div className="bg-warning">Column with 5 vertical gutter</div></div>
						<div className="col-4"><div className="bg-primary">Column with 5 vertical gutter</div></div>
						<div className="col-4"><div className="bg-success">Column with 5 vertical gutter</div></div>
						<div className="col-4"><div className="bg-danger">Column with 5 vertical gutter</div></div>
					</div>
				</div>

				<div className="mt-5">
					<h5 className="text_left">Grid with vertical gutter</h5>
					<div className='row gx-5 gy-5'>
						<div className="col-6"><div className="bg-info">Column with 5 horizontal gutter</div></div>
						<div className="col-6"><div className="bg-warning">Column with 5 horizontal gutter</div></div>
						<div className="col-4"><div className="bg-primary">Column with 5 horizontal gutter</div></div>
						<div className="col-4"><div className="bg-success">Column with 5 horizontal gutter</div></div>
						<div className="col-4"><div className="bg-danger">Column with 5 horizontal gutter</div></div>
					</div>
				</div>

			</div>
		);
	}
}

export default Grid;
