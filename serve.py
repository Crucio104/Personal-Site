#!/usr/bin/env python3
"""
Simple local development server for Alessio Curcio's personal site.
Run:
    python3 serve.py
Then open http://localhost:3000 in your browser.
"""

import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 3000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

def run():
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        url = f"http://localhost:{PORT}"
        print(f"\n==========================================")
        print(f"  Alessio Curcio — Personal Site & CV")
        print(f"  Serving at: {url}")
        print(f"  Press Ctrl+C to stop the server.")
        print(f"==========================================\n")
        try:
            webbrowser.open(url)
        except Exception:
            pass
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")
            sys.exit(0)

if __name__ == '__main__':
    run()

