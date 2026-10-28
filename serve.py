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

DEFAULT_PORT = 3000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

class ReusableTCPServer(socketserver.TCPServer):
    allow_reuse_address = True

def run():
    port = DEFAULT_PORT
    httpd = None

    for attempt in range(10):
        try:
            httpd = ReusableTCPServer(("", port), Handler)
            break
        except OSError:
            port += 1

    if not httpd:
        print(f"Error: Could not bind to ports {DEFAULT_PORT} to {DEFAULT_PORT + 9}.")
        sys.exit(1)

    url = f"http://localhost:{port}"
    print("\n" + "=" * 52)
    print("  Alessio Curcio — Personal Site & CV")
    print(f"  Serving at: {url}")
    print("  Press Ctrl+C to stop the server.")
    print("=" * 52 + "\n")

    try:
        webbrowser.open(url)
    except Exception:
        pass

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped cleanly.")
        httpd.server_close()
        sys.exit(0)

if __name__ == '__main__':
    run()
