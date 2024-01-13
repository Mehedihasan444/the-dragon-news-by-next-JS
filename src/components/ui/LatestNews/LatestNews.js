"use client";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import topNews from "@/assets/top-news.png";
import topNews2 from "@/assets/top-news2.png";
const LatestNews = () => {
  return (
    <Box className="mb-5">
      <Card>
        <CardActionArea>
          <CardMedia>
            <Image src={topNews} width={800} alt="topNews" />
          </CardMedia>
          <CardContent>
            <p className="w-[100px] text-center bg-red-500 text-white rounded">
              Technology
            </p>
            <Typography gutterBottom variant="h5" component="div">
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
            </Typography>
            <Typography gutterBottom className="">
              By Tanmoy Parvez - Mar 18 2023
            </Typography>
            <Typography variant="body2" color="text.secondary">
              It is a long established fact that a reader will be distracted by
              the readable content of a apage when looking at its layout.......
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      {/*  */}

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className="my-10">
        <Grid item xs={6}>
          <Card>
            <CardActionArea>
              <CardMedia>
                <Image src={topNews2} width={800} alt="topNews" />
              </CardMedia>
              <CardContent>
                <p className="w-[100px] text-center bg-red-500 text-white rounded">
                  Technology
                </p>
                <Typography gutterBottom >
                  Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                  Again
                </Typography>
                <Typography gutterBottom className="">
                  By Tanmoy Parvez - Mar 18 2023
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its
                  layout.......
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardActionArea>
              <CardMedia>
                <Image src={topNews2} width={800} alt="topNews" />
              </CardMedia>
              <CardContent>
                <p className="w-[100px] text-center bg-red-500 text-white rounded">
                  Technology
                </p>
                <Typography gutterBottom >
                  Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                  Again
                </Typography>
                <Typography gutterBottom className="">
                  By Tanmoy Parvez - Mar 18 2023
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its
                  layout.......
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardActionArea>
              <CardMedia>
                <Image src={topNews2} width={800} alt="topNews" />
              </CardMedia>
              <CardContent>
                <p className="w-[100px] text-center bg-red-500 text-white rounded">
                  Technology
                </p>
                <Typography gutterBottom >
                  Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                  Again
                </Typography>
                <Typography gutterBottom className="">
                  By Tanmoy Parvez - Mar 18 2023
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its
                  layout.......
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardActionArea>
              <CardMedia>
                <Image src={topNews2} width={800} alt="topNews" />
              </CardMedia>
              <CardContent>
                <p className="w-[100px] text-center bg-red-500 text-white rounded">
                  Technology
                </p>
                <Typography gutterBottom >
                  Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                  Again
                </Typography>
                <Typography gutterBottom className="">
                  By Tanmoy Parvez - Mar 18 2023
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its
                  layout.......
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LatestNews;
