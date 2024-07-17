import React, { useRef, useEffect } from "react";
import "./App.css";

function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvasr = canvasRef.current;
    const ctx = canvasr.getContext("2d");

    ctx.fillStyle = "yellow";
    ctx.fillRect(260, 110, 40, 40);

    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(60, 60, 50, 0, Math.PI, false);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "green";
   // ctx.beginPath();
    ctx.moveTo(5, 60);
    ctx.arc(60, 60, 54, 0, Math.PI, false);
   // ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(25, 70);
    ctx.arc(25, 75, 3, 0, Math.PI * 2, false);
    ctx.moveTo(40, 70);
    ctx.arc(40, 70, 3, 0, Math.PI * 2, false);
    ctx.moveTo(60, 85);
    ctx.arc(60, 85, 3, 0, Math.PI * 2, false);
    ctx.moveTo(35, 90);
    ctx.arc(35, 90, 3, 0, Math.PI * 2, false);
    ctx.moveTo(85, 70);
    ctx.arc(85, 70, 3, 0, Math.PI * 2, false);
    ctx.moveTo(85, 90);
    ctx.arc(80, 90, 3, 0, Math.PI * 2, false);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();

    const canvasHTML = document.getElementById("canvas");
    const ctx2 = canvasHTML.getContext("2d");

    ctx2.fillStyle = "green";
    ctx2.fillRect(120, 70, 150, 150);

    ctx2.beginPath();
    ctx2.moveTo(40, 80);
    ctx2.lineTo(80, 80);
    ctx2.lineTo(60, 40);
    ctx2.closePath();
    ctx2.stroke();

    const canvas3 = document.getElementById("prueba");

    if (canvas3.getContext) {
      const ctx3 = canvas3.getContext("2d");

      ctx3.fillStyle = "blue";
      ctx3.fillRect(25, 25, 100, 100);
      ctx3.clearRect(45, 45, 60, 60);
      ctx3.strokeRect(50, 50, 50, 50);
    }

    const canvasFour = document.getElementById("image");
    const ctx4 = canvasFour.getContext("2d");

    ctx4.fillStyle = "brown";
    ctx4.fillRect(70, 10, 250, 250);

    ctx4.fillStyle = "gray";
    ctx4.fillRect(10, 10, 50, 50);

    ctx4.fillStyle = "red";

    ctx4.fillRect(10, 70, 40, 40);

    const canvasFive = document.getElementById("triangle");

    if (canvasFive.getContext) {
      const ctx5 = canvasFive.getContext("2d");

      ctx5.beginPath();
      ctx5.moveTo(40, 95);
      ctx5.lineTo(140, 95);
      ctx5.lineTo(40, 25);
      ctx5.fill();

      ctx5.beginPath();
      ctx5.moveTo(160, 95);
      ctx5.lineTo(220, 95);
      ctx5.lineTo(190, 25);
      ctx5.fill();

      ctx5.beginPath();
      ctx5.moveTo(230, 95);
      ctx5.lineTo(290, 95);
      ctx5.lineTo(260, 25);
      // ctx5.closePath();
      ctx5.stroke();
    }

    const canvasSix = document.getElementById("face");

    if (canvasSix.getContext) {
      const ctx6 = canvasSix.getContext("2d");

      ctx6.beginPath();
      ctx6.arc(75, 75, 50, 0, Math.PI * 2, true);
      ctx6.moveTo(110, 75);
      ctx6.arc(75, 75, 35, 0, Math.PI, false);
      ctx6.moveTo(65, 65);
      ctx6.arc(60, 65, 5, 0, Math.PI * 2, true);
      ctx6.moveTo(95, 65);
      ctx6.arc(90, 65, 5, 0, Math.PI * 2, true);

      ctx6.moveTo(150, 40);
      ctx6.rect(150, 40, 100, 80);
      ctx6.stroke();
    }
    console.log("🚀 ~ useEffect ~ Math.PI:", Math.PI);

    const canvasSeven = document.getElementById("square");

    if (canvasSeven.getContext) {
      const ctx7 = canvasSeven.getContext("2d");

      ctx7.fillStyle = "white";

      ctx7.beginPath();
      ctx7.moveTo(75, 25);
      ctx7.quadraticCurveTo(25, 25, 25, 62.5);
      ctx7.quadraticCurveTo(25, 100, 50, 100);
      ctx7.quadraticCurveTo(50, 120, 30, 125);
      ctx7.quadraticCurveTo(60, 120, 65, 100);
      ctx7.quadraticCurveTo(125, 100, 125, 62.5);
      ctx7.quadraticCurveTo(125, 25, 75, 25);
      ctx7.fill();

      /*   for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 2; i++) {
          ctx7.beginPath();
          const x = 25 + j * 20;
          const y = 25 + j * 20;
          const radius = 5;
          const startAngle = 0;
          const endAngle = Math.PI + (Math.PI * j) / 2;

          const counterclockwise = i % 2 !== 0;

          ctx7.arc(x, y, radius, startAngle, endAngle, counterclockwise);

          if (i > 1) {
            ctx7.fill();
          } else {
            ctx7.stroke();
          }
        } 
      } */
    }

    const canvas8 = document.getElementById("bezier");
    const ctx8 = canvas8.getContext("2d");

    ctx8.fillStyle = "red";

    ctx8.beginPath();
    ctx8.moveTo(75, 40);
    ctx8.bezierCurveTo(75, 37, 70, 25, 50, 25);
    ctx8.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    ctx8.bezierCurveTo(20, 80, 40, 102, 75, 120);
    ctx8.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    ctx8.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    ctx8.bezierCurveTo(85, 25, 75, 37, 75, 40);
    ctx8.fill();

    const canvas9 = document.getElementById("quadratic");
    const ctx9 = canvas9.getContext("2d");

    ctx9.beginPath();
    ctx9.moveTo(152, 120);
    ctx9.quadraticCurveTo(145, 70, 80, 135);
    ctx9.quadraticCurveTo(45, 45, 80, 30);
    ctx9.quadraticCurveTo(70, 45, 140, 70);
    ctx9.quadraticCurveTo(145, 70, 145, 60);
    ctx9.quadraticCurveTo(145, 60, 150, 70);
    ctx9.fill();

    ctx9.beginPath();
    ctx9.moveTo(145, 60);
    ctx9.quadraticCurveTo(150, 70, 155, 60);
    ctx9.quadraticCurveTo(155, 65, 158, 70);
    ctx9.quadraticCurveTo(160, 78, 225, 30);
    ctx9.quadraticCurveTo(250, 45, 225, 135);
    ctx9.quadraticCurveTo(150, 75, 152, 120);
    ctx9.fill();

    const canvas10 = document.getElementById("path");

    const ctx10 = canvas10.getContext("2d");

    ctx10.beginPath();
    ctx10.moveTo(40, 75);
    ctx10.bezierCurveTo(40, 70, 80, 40, 110, 75);
    ctx10.bezierCurveTo(40, 110, 80, 80, 40, 75);
    ctx10.moveTo(68, 90);
    ctx10.bezierCurveTo(50, 100, 30, 110, 0, 125);
    ctx10.stroke();

    ctx10.beginPath();
    ctx10.moveTo(110, 75);
    ctx10.bezierCurveTo(115, 70, 380, 30, 100, 160);
    ctx10.stroke();

    ctx10.beginPath();
    ctx10.moveTo(130, 120);
    ctx10.arc(160, 85, 5, 0, Math.PI * 2, false);
    ctx10.fill();

    ctx10.beginPath();
    ctx10.moveTo(180, 120);
    ctx10.bezierCurveTo(160, 120, 80, 60, 198, 110);
    ctx10.stroke();

    ctx10.beginPath();
    ctx10.moveTo(90, 130);
    ctx10.bezierCurveTo(95, 130, 55, 80, 90, 130);
    ctx10.stroke();

    ctx10.beginPath();
    ctx10.moveTo(85, 135);
    ctx10.bezierCurveTo(90, 135, 45, 80, 85, 135);
    ctx10.stroke();

    ctx10.beginPath();
    ctx10.moveTo(80, 140);
    ctx10.bezierCurveTo(85, 140, 35, 80, 80, 140);
    ctx10.stroke();

    ctx10.beginPath();
    ctx10.moveTo(170, 100);
    ctx10.lineTo(160, 105);
    ctx10.lineTo(160, 95);
    ctx10.moveTo(180, 102);
    ctx10.lineTo(180, 112);
    ctx10.lineTo(190, 106);
    ctx10.moveTo(170, 118);
    ctx10.lineTo(172, 105);
    ctx10.lineTo(158, 113);
    ctx10.moveTo(140, 100);
    ctx10.lineTo(150, 98);
    ctx10.lineTo(150, 108);
    ctx10.stroke();

    const canvas11 = document.getElementById("draw");
    const ctx11 = canvas11.getContext("2d");

    roundedRect(ctx11, 12, 12, 150, 150, 15);
    roundedRect(ctx11, 19, 19, 150, 150, 9);
    roundedRect(ctx11, 53, 53, 49, 33, 10);
    roundedRect(ctx11, 53, 119, 49, 16, 6);
    roundedRect(ctx11, 135, 53, 49, 33, 10);
    roundedRect(ctx11, 135, 119, 25, 49, 10);

    ctx11.fillStyle = "yellow"
    ctx11.beginPath();
    ctx11.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
    ctx11.lineTo(31, 37);
    ctx11.fill();

    ctx11.fillStyle = "black";
    ctx11.beginPath();
    ctx11.moveTo(35, 20);
    ctx11.arc(35, 30, 2, 0, Math.PI * 2);
    ctx11.fill()

    for (let i = 0; i < 8; i++) {
      ctx11.fillStyle = "black"
      ctx11.fillRect(51 + i * 16, 35, 4, 4);
    }

    for (let i = 0; i < 6; i++) {
      ctx11.fillRect(115, 51 + i * 16, 4, 4);
    }

    for (let i = 0; i < 8; i++) {
      ctx11.fillRect(51 + i * 16, 99, 4, 4);
    }

    ctx11.fillStyle = "blue"
    ctx11.beginPath();
    ctx11.moveTo(83, 116);
    ctx11.lineTo(83, 102);
    ctx11.bezierCurveTo(83, 94, 89, 88, 97, 88);
    ctx11.bezierCurveTo(105, 88, 111, 94, 111, 102);
    ctx11.lineTo(111, 116);
    ctx11.lineTo(106.333, 111.333);
    ctx11.lineTo(101.666, 116);
    ctx11.lineTo(97, 111.333);
    ctx11.lineTo(92.333, 116);
    ctx11.lineTo(87.666, 111.333);
    ctx11.lineTo(83, 116);
    ctx11.fill();

    ctx11.fillStyle = "white";
    ctx11.beginPath();
    ctx11.moveTo(91, 96);
    ctx11.bezierCurveTo(88, 96, 87, 99, 87, 101);
    ctx11.bezierCurveTo(87, 103, 88, 106, 91, 106);
    ctx11.bezierCurveTo(94, 106, 95, 103, 95, 101);
    ctx11.bezierCurveTo(95, 99, 94, 96, 91, 96);
    ctx11.moveTo(103, 96);
    ctx11.bezierCurveTo(100, 96, 99, 99, 99, 101);
    ctx11.bezierCurveTo(99, 103, 100, 106, 103, 106);
    ctx11.bezierCurveTo(106, 106, 107, 103, 107, 101);
    ctx11.bezierCurveTo(107, 99, 106, 96, 103, 96);
    ctx11.fill();

    ctx11.fillStyle = "black";
    ctx11.beginPath();
    ctx11.arc(101, 102, 2, 0, Math.PI * 2, true);
    ctx11.fill();

    ctx11.beginPath();
    ctx11.arc(89, 102, 2, 0, Math.PI * 2, true);
    ctx11.fill();

    // Una función auxiliar para dibujar un rectángulo con esquinas redondeadas.

    function roundedRect(ctx11, x, y, width, height, radius) {
      ctx11.beginPath();
      ctx11.moveTo(x, y + radius);
      ctx11.arcTo(x, y + height, x + radius, y + height, radius);
      ctx11.arcTo(x + width, y + height, x + width, y + height - radius, radius);
      ctx11.arcTo(x + width, y, x + width - radius, y, radius);
      ctx11.arcTo(x, y, x, y + radius, radius);
      ctx11.stroke();
    }

    const canvas12 = document.getElementById("path2d");
    const ctx12 = canvas12.getContext("2d");

    const rectangle = new Path2D();
    rectangle.rect(10, 10, 50, 50);

    const circle = new Path2D();
    circle.arc(100, 35, 25, 0, 2 * Math.PI)

    ctx12.stroke(rectangle)
    ctx12.fill(circle)

  }, [canvasRef]);

  return (
    <>
      <canvas ref={canvasRef}></canvas>
      <canvas id="triangle"></canvas>
      <canvas id="face"></canvas>
      <canvas id="square"></canvas>
      <h2>hello</h2>

      <canvas id="canvas"></canvas>
      <canvas id="prueba">Background color?</canvas>
      <canvas id="image"></canvas>
      <canvas id="bezier"></canvas>

      <h2>Canvas!</h2>
      <canvas id="quadratic"></canvas>
      <canvas id="path"></canvas>
      <canvas id="draw" height={180}></canvas>
      <canvas id="path2d"></canvas>
    </>
  );
}

export default App;
