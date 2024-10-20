"use client";
// React
import React from "react";

// NextUI
import {Card, CardBody} from "@nextui-org/react";

export default function CustomFooter() {
  return (
    <footer>
      <Card className="rounded-none">
        <CardBody>
          <p className="text-blanco">footer</p>
        </CardBody>
      </Card>
    </footer>
  );
}
