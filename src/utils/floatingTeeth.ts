// Floating dental icons with collision detection
class FloatingIcon {
  canvas: HTMLCanvasElement;
  icon: (ctx: CanvasRenderingContext2D) => void;
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;

  constructor(canvas: HTMLCanvasElement, icon: (ctx: CanvasRenderingContext2D) => void, x: number, y: number) {
    this.canvas = canvas;
    this.icon = icon;
    this.x = x;
    this.y = y;
    this.radius = 25;
    this.vx = (Math.random() - 0.5) * 1.5;
    this.vy = (Math.random() - 0.5) * 1.5;
    this.rotation = Math.random() * Math.PI * 2;
    this.rotationSpeed = (Math.random() - 0.5) * 0.02;
  }

  update(icons: FloatingIcon[]) {
    this.x += this.vx;
    this.y += this.vy;
    this.rotation += this.rotationSpeed;

    // Bounce off walls
    if (this.x - this.radius < 0 || this.x + this.radius > this.canvas.width) {
      this.vx *= -1;
      this.x = Math.max(this.radius, Math.min(this.canvas.width - this.radius, this.x));
    }
    if (this.y - this.radius < 0 || this.y + this.radius > this.canvas.height) {
      this.vy *= -1;
      this.y = Math.max(this.radius, Math.min(this.canvas.height - this.radius, this.y));
    }

    // Apply speed limit to prevent runaway velocity
    const maxSpeed = 3;
    const currentSpeed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
    if (currentSpeed > maxSpeed) {
      this.vx = (this.vx / currentSpeed) * maxSpeed;
      this.vy = (this.vy / currentSpeed) * maxSpeed;
    }

    // Collision detection with other icons
    icons.forEach(other => {
      if (other === this) return;

      const dx = other.x - this.x;
      const dy = other.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const minDistance = this.radius + other.radius;

      if (distance < minDistance && distance > 0) {
        // Calculate collision angle
        const angle = Math.atan2(dy, dx);

        // Separate icons
        const overlap = minDistance - distance;
        const separateX = Math.cos(angle) * overlap / 2;
        const separateY = Math.sin(angle) * overlap / 2;

        this.x -= separateX;
        this.y -= separateY;
        other.x += separateX;
        other.y += separateY;

        // Simple velocity exchange with damping
        const tempVx = this.vx;
        const tempVy = this.vy;

        this.vx = other.vx * 0.9;
        this.vy = other.vy * 0.9;
        other.vx = tempVx * 0.9;
        other.vy = tempVy * 0.9;
      }
    });
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    ctx.fillStyle = '#c0dff3'; // Slightly lighter than bg-main-darker (#a5d3ee)
    ctx.strokeStyle = '#c0dff3';
    ctx.lineWidth = 2;
    this.icon(ctx);
    ctx.restore();
  }
}

// Dental icon SVG path
const icons = {
  tooth: (ctx: CanvasRenderingContext2D) => {
    // Scale down the original SVG (994x1030) to fit in a ~50px space
    const scale = 0.05;
    ctx.scale(scale, scale);
    ctx.translate(-497, -515); // Center the tooth

    const path = new Path2D("M 230 66.625 C 178.207 73.192, 137.579 105.985, 106.441 166.355 C 89.807 198.605, 81.024 227.941, 73.316 277 C 71.012 291.659, 70.672 297.262, 70.263 327.217 C 69.707 367.922, 70.826 381.793, 77.670 419 C 84.050 453.685, 97.473 494.705, 115.329 534.080 C 116.681 537.061, 122.831 550.975, 128.996 565 C 135.160 579.025, 141.700 593.875, 143.529 598 C 161.514 638.573, 168.011 666.187, 181.992 761.500 C 189.745 814.354, 195.579 841.908, 205.709 873.500 C 213.152 896.715, 223.945 921.147, 233.981 937.500 C 250.638 964.642, 273.341 982.905, 298.606 989.486 C 306.234 991.472, 321.640 991.425, 329.936 989.389 C 337.987 987.414, 352.109 980.517, 360.923 974.257 C 368.976 968.537, 385.188 952.560, 390.912 944.700 C 406.108 923.838, 414.136 898.253, 420.471 850.500 C 426.082 808.202, 437.716 772.909, 451.803 755.446 C 458.607 747.013, 468.109 739.258, 472.696 738.396 C 474.788 738.003, 479.610 738.214, 483.411 738.865 C 511.079 743.605, 518.078 760.134, 528.987 846.500 C 534.663 891.446, 539.572 912.137, 549.100 931.282 C 555.786 944.715, 560.999 952.109, 570.445 961.555 C 589.430 980.540, 609.024 989.442, 634.500 990.659 C 653.926 991.586, 671.145 987.632, 690 977.914 C 713.258 965.926, 731.606 946.243, 745.297 918.594 C 762.614 883.623, 767.848 852.243, 772.499 755.500 C 775.687 689.197, 785.011 648.493, 814.305 573 C 840.829 504.645, 857.322 457.035, 863.916 429.787 C 874.923 384.299, 878.503 349.672, 877.696 296.500 C 877.155 260.857, 876.094 247.215, 871.899 222 C 864.923 180.057, 849.854 145.231, 827.735 119.931 C 797.817 85.711, 765.057 69.897, 723.500 69.617 C 707.327 69.508, 699.778 70.503, 682.500 75.024 C 664.364 79.769, 628.350 93.619, 593.500 109.249 C 561.507 123.598, 542.200 128.625, 515 129.689 C 477.693 131.148, 435.721 121.634, 372.897 97.478 C 314.959 75.201, 283.388 67.252, 250 66.536 C 240.925 66.341, 231.925 66.381, 230 66.625 M 225.142 119.508 C 199.455 126.728, 179.038 143.945, 160.106 174.353 C 154.697 183.040, 144.778 202.899, 141.437 211.728 C 134.826 229.203, 127.205 261.280, 123.318 288 C 120.742 305.710, 120.763 362.619, 123.353 381 C 131.295 437.374, 138.626 460.234, 175.405 543.303 C 213.363 629.036, 214.770 634.383, 235.577 772 C 246.356 843.290, 264.747 896.815, 287.688 923.669 C 292.969 929.850, 303.701 937.326, 309.500 938.862 C 317.916 941.092, 327.934 936.052, 341.027 923 C 352.500 911.563, 358.302 900.487, 363.027 881 C 364.699 874.104, 368.232 853.102, 371.017 833.500 C 375.060 805.041, 383.781 774.415, 393.513 754.500 C 400.415 740.377, 410.453 723.693, 416.024 717.086 C 429.643 700.935, 447.701 692.100, 473.500 688.965 C 483.736 687.721, 491.213 688.281, 502 691.096 C 517.697 695.194, 526.410 699.656, 535.807 708.412 C 550.758 722.342, 560.719 739.917, 566.942 763.347 C 571.404 780.144, 576.787 812.600, 580.984 848 C 584.327 876.196, 588.913 895.857, 595.214 909 C 598.362 915.565, 600.907 919.100, 606.395 924.530 C 618.592 936.599, 630.578 941.029, 645.422 938.955 C 664.748 936.253, 679.450 926.481, 691.993 908 C 709.885 881.639, 716.018 851.407, 720.499 767.500 C 722.594 728.260, 723.891 713.650, 727.555 688 C 732.723 651.830, 744.148 611.148, 761.820 566 C 807.584 449.083, 819.811 409.265, 826.185 356.379 C 828.060 340.825, 828.346 333.102, 828.387 297 C 828.434 255.423, 827.786 243.589, 824.361 223.500 C 817.232 181.681, 800.659 150.595, 776.730 134.153 C 760.894 123.273, 738.147 118.265, 716.962 120.994 C 698.626 123.356, 666.504 134.260, 628.077 151.166 C 587.590 168.978, 573.713 173.659, 548.646 177.958 C 523.539 182.264, 502.478 182.703, 479.500 179.399 C 440.935 173.854, 408.415 164.898, 357.645 145.838 C 320.539 131.908, 298.658 125.151, 275.216 120.384 C 263.924 118.088, 232.173 117.532, 225.142 119.508 M 335.673 201.044 C 333.107 202.440, 331.219 204.508, 329.945 207.314 C 325.260 217.632, 328.894 223.318, 352.599 242.753 C 361.451 250.010, 380.373 261.511, 391.426 266.351 C 405.207 272.387, 422.656 277.646, 435.102 279.515 C 447.842 281.429, 482.811 281.448, 496.500 279.549 C 533.410 274.429, 558.196 267.987, 567.828 261.010 C 570.049 259.401, 573.134 255.928, 574.683 253.292 C 577.067 249.237, 577.493 247.423, 577.456 241.500 C 577.385 230.245, 571.643 221.681, 561.250 217.327 C 556.300 215.253, 543.677 216.061, 535.500 218.974 C 526.099 222.323, 514.945 224.720, 496 227.460 C 453.432 233.618, 428.480 229.538, 372.585 207.278 C 356.481 200.864, 352.407 199.621, 346.500 199.318 C 340.838 199.028, 338.769 199.358, 335.673 201.044");
    ctx.fill(path);
  }
};

export function initFloatingIcons() {
  const canvas = document.getElementById('dental-icons-canvas') as HTMLCanvasElement;
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let floatingIcons: FloatingIcon[] = [];

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Initialize icons
    floatingIcons = [];
    const iconCount = 12;

    for (let i = 0; i < iconCount; i++) {
      const x = Math.random() * (canvas.width - 100) + 50;
      const y = Math.random() * (canvas.height - 100) + 50;
      floatingIcons.push(new FloatingIcon(canvas, icons.tooth, x, y));
    }
  }

  function animate() {
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    floatingIcons.forEach(icon => icon.update(floatingIcons));
    floatingIcons.forEach(icon => icon.draw(ctx));

    requestAnimationFrame(animate);
  }

  resize();
  window.addEventListener('resize', resize);
  animate();
}
