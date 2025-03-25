import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dtos/create-message.dto';
import { StartWithUppercasePipe } from './pipes/start-with-uppercase.pipe';

@Controller('messages')
export class MessagesController {
    constructor(private messagesService: MessagesService){}
  @Get()
  listMessages(){
      return this.messagesService.findAll()
  }
 
  @Get("/:id")
  getMessage(@Param("id") id: string){
    console.log(id);
       return this.messagesService.findOne(id)

  }

  @Post()
  @UsePipes(new ValidationPipe())
  createMessage(@Body() body: CreateMessageDto){
    console.log(body)
    return this.messagesService.create(body.content) 
  }

  @Post()
  createMessage2(@Body('content', StartWithUppercasePipe) content: string){
    console.log(content)
    return this.messagesService.create(content) 
  }

}
