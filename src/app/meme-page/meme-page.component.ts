import { Component, ViewChild, ElementRef  } from '@angular/core';
import { ColorEvent } from 'ngx-color';

@Component({
  selector: 'app-meme-page',
  templateUrl: './meme-page.component.html',
  styleUrls: ['./meme-page.component.css']
})
export class MemePageComponent {

  @ViewChild('memeCanvas', { static: false })
  myCanvas!: ElementRef;

  imageCount: number = 0;
  topText: string= "";
  fileEvent: any;
  textColor: string="#000000";
  backgroundColor: string="#F9F9F9";
  fontSize: number = 24;
  fontColor: string = '#000000';
  fontFamily: string = "Arial";
  
  


  preview(e: any) {
    this.fileEvent = e;
    let canvas = this.myCanvas.nativeElement;
    let ctx = canvas.getContext('2d');
    let render = new FileReader();
    render.readAsDataURL(e.target.files[0]);
    render.onload = function (event)  {
      const img = new Image();
      if (event.target) {
        img.src = event.target.result as string;
      }
      img.onload = function () {
        ctx.drawImage(img, 50, 150, 600, 500);
      }
    }

  }


  drawText() {
    let canvas = this.myCanvas.nativeElement;
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = this.backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.preview(this.fileEvent);
    ctx.fillStyle = this.textColor;
    ctx.font = `${this.fontSize}px ${this.fontFamily}`;
    // ctx.font = '50px sans-serif';
    ctx.textAlign = 'center';
     ctx.fillText(this.topText, canvas.width/2, 100)


  }

  canvasTextColor($event: ColorEvent) {
    this.textColor = $event.color.hex;
    this.drawText();
  }
  canvasBgColor($event: ColorEvent){
    this.backgroundColor = $event.color.hex;
    this.drawText();

  }

    downloadImg(format: string) {
      let canvas = this.myCanvas.nativeElement;
      let image;
    
      if (format === 'jpg') {
        image = canvas.toDataURL('image/jpeg'); 
      } else if (format === 'webp') {
        image = canvas.toDataURL('image/webp'); 
      } else if (format === 'png') {
        image = canvas.toDataURL('image/png'); 
      }
    
      let link = document.createElement('a');
      link.download = `memeImg.${format}`;
      link.href = image;
      link.click();
    }
}
