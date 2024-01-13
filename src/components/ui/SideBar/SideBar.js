import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";
import topNews from "@/assets/side-top-news.png";

const SideBar = () => {
    return (
        <Box>
            <Card>
            <CardActionArea>
              <CardMedia>
                <Image src={topNews} width={800} alt="topNews" />
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
        </Box>
    );
};

export default SideBar;