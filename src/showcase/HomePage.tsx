import React from 'react';
import { Layout } from './Layout';
import { Button, Card, CardBody, CardText, CardTitle } from '../lib';

export const HomePage = () => {

	return (
		<Layout title="React-Craft" className="home">

			<h2>Build apps with React and React Craft</h2>

			<div className="d-flex justify-content-center">
				<Button>Getting started</Button>
				<Button className="ml-2">Github</Button>
			</div>

			<div className="row mt-2">
				<div className="col-12 col-md-4">
					<Card>
						<CardBody>
							<CardTitle>Twitter Bootstrap 4.5</CardTitle>
							<CardText>TODO</CardText>
						</CardBody>
					</Card>
				</div>

				<div className="col-12 col-md-4 mt-3 mt-md-0">
					<Card>
						<CardBody>
							<CardTitle>Well documentated</CardTitle>
							<CardText>TODO</CardText>
						</CardBody>
					</Card>
				</div>

				<div className="col-12 col-md-4 mt-3 mt-md-0">
					<Card>
						<CardBody>
							<CardTitle>Compatible</CardTitle>
							<CardText>TODO</CardText>
						</CardBody>
					</Card>
				</div>
			</div>

		</Layout>
	);
}