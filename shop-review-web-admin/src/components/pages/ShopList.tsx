import React, { useEffect, useState } from "react";
import { getShops } from "../../firebase";
/* components */
import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  Paper,
} from "@material-ui/core";
import { GenericTemplate } from "../templates/GenericTemplate";
/* types */
import { Shop } from "../../types/shop";

export const ShopList: React.FC = () => {
  const [shops, setShops] = useState<Shop[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const _shops = await getShops();
      setShops(_shops);
    };
    fetch();
  }, []);

  return (
    <GenericTemplate title="Shop一覧">
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>名前</TableCell>
              <TableCell>場所</TableCell>
              <TableCell>スコア</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {shops.map((shop) => (
              <TableRow key={shop.id}>
                <TableCell>{shop.name}</TableCell>
                <TableCell>{shop.place}</TableCell>
                <TableCell>{shop.score}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </GenericTemplate>
  );
};
