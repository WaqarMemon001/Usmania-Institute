import { Container, Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Carousel from "../components/Carousel/Carousel";

const useStyles = makeStyles({
  mainView: {
    marginTop: 65,
  },
  intro: {
    marginTop: 20,
    textAlign: "right",
  },
  hrline: {
    // background: "linear-gradient(45deg, #06ba00 70%, #46ff40  40%)",
    background: "linear-gradient(45deg,  #06ba00 70%, #0e63ad 40%)",

    height: 3,
  },
});

function Home() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.mainView}>
        <Carousel />
      </div>

      <Container>
        <Box className={classes.intro}>
          <dl>
            <dt>
              <Typography marginY={3} variant="h4">
                : ادارہ کے بانی و مؤسس
              </Typography>
            </dt>
            <dd>
              <Typography variant="h4">
                حضرت مولانا ڈاکٹر عبد الحى سندهى _مدظلہ العالي_
              </Typography>
              <Typography variant="h4">
                متخصص: تفسير و علوم قرآنيه بين الأقوامي اسلامي يونيورستى اسلام
                آباد
              </Typography>
            </dd>

            <br />

            <dt>
              <Typography variant="h4" marginY={3}>
                : ادارہ کا قیام
              </Typography>
            </dt>
            <dd>
              <Typography variant="h4">
                حضرت مولانا ڈاکٹر عبد الحى سندھی (مدظلہ العالي) کی سرپرستی میں
                تاریخی شہر سہون شریف میں 2022 میں ادارہ عثمانيه اکیڈمی کے نام سے
                ادارہ کا قیام عمل میں آیا۔
              </Typography>
            </dd>

            <dt>
              <Typography variant="h4" marginY={3}>
                :ادارہ کے مقاصد
              </Typography>
            </dt>
            <dd>
              <Typography variant="h4">
                انسانی ترقی اور خاص طور پر نوجوان نسل کی ترقی کے لیے معاشرہ کے
                حالات کو مدنظر رکھتے ہوے دینی و دنیاوی تعلیمات کی روشنی میں نسل
                انسانی ونوجوانوں کی تربیت کرنا۔ تاکہ نسل انسانی حقیقی مقاصد کو
                مد نظر رکھتے ہوے اپنی دنیوی زندگی کو کامیاب بنا کراخروی زندگی کی
                کامیابی کو یقینی بنائے۔
              </Typography>
            </dd>

            <dt>
              <Typography variant="h4" marginY={3}>
                : اکیڈمی کے بارے میں
              </Typography>
            </dt>
            <dd>
              <Typography variant="h4">
                یہ تعلیمی ادارہ اپنے مختلف کورسز کے زریعہ سے نسل انسانی کی تعلیم
                وتربیت کا خواہش ركهتا ہے، اسی لیے یہ ادارہ آپ کو منفرد نظر
                آئیگا۔
              </Typography>
              <Typography variant="h4">
                ايك ساله علم دين كورس- ترجمہ قرآن، تفسیر، اصول تفسیر، حدیث، اصول
                حدیث، علم الرجال،فقہ، أصول فقہ، تزکیہ، معاشیات، سیاسیات،سیرت
                ،فقہ سیرت، سیکولرزم، لبرلزم، جديد الحاد كى جديد شكلين،جدید مسائل
                اور آن لائن ورکشاپ مختلف موضوعات پر۔
              </Typography>
            </dd>
          </dl>
        </Box>

        <br />
        <br />
        <hr className={classes.hrline} />

        {/* Publication */}

        <Box marginY={5}>
          <Typography variant="h4">Publication</Typography>
        </Box>

        <br />
        <br />
        <hr className={classes.hrline} />

        {/* artilce */}

        <Box marginY={5}>
          <Typography variant="h4">Article</Typography>
        </Box>

        <br />
        <br />
        <hr className={classes.hrline} />

        {/* Courses */}
        <Box marginY={5}>
          <Typography variant="h4">Publication</Typography>
        </Box>
      </Container>
    </>
  );
}

export default Home;
