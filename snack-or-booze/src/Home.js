import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function Home({ snacks, drinks }) {
  const snackCount = snacks.length;
  const drinkCount = drinks.length;

  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
            <h4>Total Snacks: {snackCount}</h4>
            <h4>Total Drinks: {drinkCount}</h4>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
