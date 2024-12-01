/**
 * Copyright (c) 2013-2014 Oculus Info Inc. 
 * http://www.oculusinfo.com/
 * 
 * Released under the MIT License.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 * of the Software, and to permit persons to whom the Software is furnished to do
 * so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
package oculus.aperture.rest;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.restlet.Application;
import org.restlet.ext.servlet.ServletAdapter;

import com.google.inject.Inject;
import com.google.inject.Singleton;

/**
 * A servlet that redirects all service requests to a Reslet Adapter
 * 
 * @author rharper
 *
 */
@Singleton
class RestletServlet extends HttpServlet
{    
	private static final long serialVersionUID = 1L;
	
	private Application app;
	
	private ServletAdapter adapter;

 
    @Inject
    public RestletServlet(Application app) {
		this.app = app;
	}
    
   

    @Override
    public void init() throws ServletException
    {        
        adapter = new ServletAdapter(getServletContext());
        adapter.setNext(app);
    }
    

    @Override
    protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException,
            IOException
    {
        adapter.service(request, response);
    }
}
