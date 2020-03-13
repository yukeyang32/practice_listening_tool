import tornado.ioloop
import tornado.web
import tornado.websocket
import os.path
import sys


#global var
port = -1

settings = dict(
        template_path = os.path.join(os.path.dirname(__file__), "template/"),
        static_path = os.path.join(os.path.dirname(__file__), "static/"),
        debug = True
)
    

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.render('main/index.html',error="",port=port)


class WebSocketHanlder(tornado.websocket.WebSocketHandler):
    def open(self):
        print("Web Socket Opened")
    
    def on_close(self):
        print('Web Socket Closed')


application = tornado.web.Application([
    (r"(?i)/",MainHandler),
    (r"(?i)/websocket",WebSocketHanlder),
    (r'(?i)/static/(.*)', tornado.web.StaticFileHandler, {'path': settings["static_path"]}),
], **settings)

if __name__ == "__main__":
    port = 8888
    if len(sys.argv) > 1:
            print ("Alternate port specifed: %s" % sys.argv[1])
            port = sys.argv[1]

    application.listen(port)
    print ("Server running on port %s ..." % port)
    tornado.ioloop.IOLoop.instance().start()