import React, { useEffect, useState } from "react";
import { getReviews } from "../../firebase";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
/* components */
import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  Paper,
  Avatar,
} from "@material-ui/core";
import { GenericTemplate } from "../templates/GenericTemplate";
/* types */
import { Review } from "../../types/review";

type Params = {
  id: string;
};
export const ReviewList: React.FC = (props) => {
  let { id }: Params = useParams();
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const _reviews = await getReviews(id);
      setReviews(_reviews);
    };
    fetch();
  }, [id]);

  return (
    <GenericTemplate title="review一覧">
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ユーザー名</TableCell>
              <TableCell>コメント</TableCell>
              <TableCell>写真</TableCell>
              <TableCell>日時</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reviews.map((review) => (
              <TableRow key={review.id}>
                <TableCell>{review.user.name}</TableCell>
                <TableCell>{review.text}</TableCell>
                <TableCell>
                  <Avatar
                    alt={review.id}
                    src={review.imageUrl}
                    variant="rounded"
                  />
                </TableCell>
                <TableCell>
                  {dayjs(review.createdAt.toDate()).format("YYYY/MM/DD HH:mm")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </GenericTemplate>
  );
};
