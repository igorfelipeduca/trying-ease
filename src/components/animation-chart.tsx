"use client";

import { Line, LineChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

type AnimationChartProps = {
  title: string;
  description: string;
  easingFn: (x: number) => number;
};

const chartConfig = {
  progress: {
    label: "Animation Progress",
    color: "#FFFFFF",
  },
} satisfies ChartConfig;

export function AnimationChart({ title, description, easingFn }: AnimationChartProps) {
  const chartData = Array.from({ length: 20 }, (_, i) => {
    const time = (i * 5);
    const normalizedTime = time / 100;
    return {
      time,
      progress: Math.round(easingFn(normalizedTime) * 100),
    };
  });

  return (
    <Card className="bg-black">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-lg">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            data={chartData}
            margin={{
              top: 20,
              right: 20,
              left: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="time"
              label={{ value: "Time", position: "bottom", fontSize: 16 }}
              tickFormatter={(value) => `${value}%`}
              tick={{ fontSize: 14 }}
            />
            <YAxis
              label={{
                value: "Progress",
                angle: -90,
                position: "left",
                fontSize: 16,
              }}
              tickFormatter={(value) => `${value}%`}
              tick={{ fontSize: 14 }}
            />
            <Line
              type="monotone"
              dataKey="progress"
              stroke="#FFFFFF"
              strokeWidth={2}
              dot={false}
              className="stroke-round [stroke-linejoin:round] [vector-effect:non-scaling-stroke]"
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <span className="text-zinc-600 font-medium">
          Trying out Eases – Igor F. Duca
        </span>
      </CardFooter>
    </Card>
  );
}
