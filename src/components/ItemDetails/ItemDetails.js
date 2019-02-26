import React, { Component } from 'react';
import { Button, Collapse, Card, Media, Row, Col } from 'react-bootstrap';


export default class ItemDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }
  render() {
    return (
      <div>
          <Button className="item-details-button"
           bsStyle="link"
           onClick={() => this.setState({open: !this.state.open })}
          >
                {this.state.open === false ? `See` : `Hide `} item details
                {this.state.open === false ? ` +` : ` -`}
          </Button>
          <Collapse in={this.state.open}>
                <div>
                    <Card>
                        <Media>
                            <img
                            width={100}
                                height={100}
                                className="align-self-start mr-3"
                                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxESEhUTExITFhUWFxgVGRcYGBsfFxgYFRUWFhUVExUYHCggGB8lGxgXIjMjJiktLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGzAlICAtLS0rNi0yLTctKy0vLS0rLS8tLTArKy0uLS4tLS03LS0wLy0tMTctLTUtLSstNS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABQYEBwECAwj/xABHEAABAwICBgYFBwkIAwAAAAABAAIDBBESIQUGMUFRcQcyYYGRwRMiobHRQkNSU3KCkhQVI2KTosLS8BYXM0RUY7LTg+Hi/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAEEAgMFBv/EADARAQACAQIEBAMHBQAAAAAAAAABAgMEEQUSITFBUaHwFCIyExVCUmFxgSORsdHh/9oADAMBAAIRAxEAPwDeKIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIq5rtrZFo+HEbOldlGy/WO9xt8kfAb1lSk3mK17yi1orG8rGi1VqV0nPkeWVdiDmHtADm7rOYOs3ZmMxwO7aMEzXtDmODmkXBBuCOwrPLhtity2Y48kXjeHoiItTMREQEREBERAREQEREBERAREQEREBERAREQEREBERBH6a0zT0kfpJ5AxuwbS5xsThYxt3PNgcgCclU6Ppa0Y+X0TzNDc2D5WYWHtxAmw7SABvsqd0u6ZMlUYgRghbh+84Bz8/wAI+6taygOGE7Nx3g8QpU7ava8xt0h9aseCAQQQcwRsIOwgrstCdEWuz6SYUNS/9C82jcTlG4mzcJOxjjlbcbbM1vtQtxMTG8CIiJYGntKMpaeSoeCWxtvYbSbgADmSAvmvXDWCasndNIbE5NaNjGi9mt9995JK+ktY9FNq6WamcbCWNzMQ2tJHquHI2PcvlTS1NNTzPgnGGWI4XD3ObxaRYg8CFe0V61md+6vnrM7eTtTT2IN7EbCDmD5K+ag611dO52E44QCXsOxxGZc3g63C19pBWsnSqwwRyyxtZBDKWXuHhkhA2+riFwDckHnuGSt5s1bRyzHf0aqYpieaH0lq5rLTVrMULwSOsw9ZvdvHapha51I1XFLG2eckSNBcA5w/RNLdj3CwLgLgnYOeautBpDGA6zsJFwSLb8rAgHZn3hcnJFYt8vZbrvt1SKLhpuuVgyEREBERAREQEREBERAREQEREBERAREQEREBeVVMGMc87GtLjyaLleqg9dNMx0lJJK8u3NaG9YucbANBIvlc8gVMRMztCJnaGh62nqK2V74onvL3ucTb1QXG9jI6zRt3kKZ0JqU1pBqSHn6thIb99+RPIW5lZp6QaN/WdNftaPDrLLo9aaCT1WzBp/3AWAcnOyKznHfylVx4Mde87ymKzVWhqYDA+JjBta6JrQ9hHyg4tue0HI71h6sa9PoJPyPSEzZom5RVjDiFhkG1Frlp3Xz7b2Ll46d0dU1MYZDURMhIuRY3eRfrStJxN7LblR9JaNq6a/pY3Bo+W0XjtxxAerydbkquTJavaHb0Wkw5o2tk5Z8I97ej6Noa6KdgkhkZIw7HMcHNPeCshfL9LXBpxNs130mZO/E3NScOtdU3ZU1H7aQ+8rX8THktzwW3hkj1fRhNlq3pL0XQ6VsynBlrWeo2aG3ooxfNlVN1MIPyQS8EmwzIOv6vT80otI98g4Pc5w/euvKi1knp/wDCldGBsAdZvLB1T3hT8VHkieC22+uPVdqfVCj0RB6Z0DquYWu8tBAPFrXnBE3diNz2rjQuutZOWyNpXCK5FmiSSVu0DGGgBueZGE5bLqZ1Q1omqojjgc1zR1wwiGQHe02sD7PKdh0g21sIG61suVtysRbmjdyMmOcdprPgrc+urHT+hcx0UbG4g+dpiEkgIILRLazGAFxJ3hqytL66H0WGgDKmZ3VJJDM8sQ+nmOwHipWvrI3NLHxse07WuALTzByWFoejga8ujibHyv7LlSweHR1pPSz3zjSEbWYcGABpF8RdiIeCWuAAAyvtWxI3gi4VVraqVhxMGKNrTiAzfe46o2EWvnfLgd3GrlfNKXzPJa1xsxh2Brd57ST7EFtRYhr2NtiIaCQ0EnaXGwHMrKa4HMIOUREBERAREQEREBERAREQEREBERAREQFpfp0r3GoggucLIzJ2EyOLfYI/aVuhaE6bZD+cOUMY9rz5q3oY/qq+p+hr+cArFkYQspmztQneQuvNYspxMw76J1iqqY/opXNH0b3aebDdvfZXPRPSeMm1ER7XR2sd2cbjbwPcqNhbfYuzms+iFWvpYt3bq59uzZsbNG15PoogX7T6O8bhxLwbM7yF7UHR5AHEyzSSDdGywA7JJbZ82gbFqYstm02t/WSuGr/SLVU9mygSsGWeThycMj3jvVDLw+O8dV/FxHLWvLFpiPfvo2XBqpRNFhSQEDe+8h7ySd3BZlNoSCM3jp6Zh4siZfxNlg6D11pKkACTA8/Idke4HI911NTVrGi9wT2HbzO4KtOPlnaY2T9ra/Xm3cyMHWe+4G8ki261lFzSBzyW5Df3Wsew7e3YlRI55u45bv8A5G7mc9uxRemq9sEZc7IbGtA9Z5tsaEYvau0lHG0uechlbeTwaN5Wv9M6akneHXwNafUa35PbcHrWv623gbZnEra2SVxc83Odmg5AHaAeWRO/sG3DhficfVNrAhxHWvfNg4Zbd6rZcszExj7R3l6DQ6GmOazn+q3aJ99/8Nm9H2sU8znwzEODGBzXfK61iDx9+W0q7vEbwWHYRmAbG3G4zC0pq5pf8llleGlznRBrBuvjJ9Y8Ozby2jwk0tKJPTmVwkJ2tPrG+xottvwGXtWUZYitd+syr5OG2vmyTXata+fZvRlHGHY7EuGwuJOEcGA5N7lxLpQx4v0chw7MLScVxkGWGflZQ2plZUzUwfUgB+I2sLXbYWJ3E3uLiwyVhabLc47Po6suY0vGF5aC4DMA2FwDvzWUDdQkrg4EXI7QbEd+5c6P0i0eq1+PM3N8WHacy3JvABBNoqtprXinpZRFI15OEOJZY4cRNg4Eg7BfK+0LNodbaGUXbOwfbu32usPasPtK77brHwubki/JO0+OycReUFQx4uxzXDi0gjxC9Vmr9hERAREQEREBERAREQEREBfP/TRnpJw/2o/cV9AKi6WoYJ5nvlp4JDcjE+JjnWBOEYiL5Lfp8sYrc0teWnPGz5/jFtyPc3iPFb5i0FSDq0VL3QR/yrPp6aNnVjiZ9ljR/wAQrn3hHhVo+G37y+dWRvcCWtLm8QCR3kLqLECxC+lzUv3E95Pko7SeiKep/wAanikPFzRj7pBZ3tWMa/r1qmdN5S+eCQMlwzNbe0h0X0b7mJ80J4XD2DudZ37yqelejSsh9aPDO39T1X97HZeDit9dVjt47MJw2qqLIR29ym9DayzUpbmXMBzYdnMcCoqqpJIjhkY+M8HtIJ5X2rhlO97mNYCXuNg3eSTkAt9opevnDTHNFm89GTxzRslbmHgOHfusvDWTRUVSxoe2+G9iDZwvbqkcl30JQCnp44dpY0Anid58VmOORC4U9JnZ043UOm1NJk9d+OO9w3CAXH/dINnAcs96w9daURVDWN+qYT3ukGXZsWx4I7G6jtZdCQ1AHpGZgWDhk5u3Y4c1hNYms17brWLV3rmrlvvbbzn9NmrHS2HfbIZknYGjeT5divmpGpJcW1NWBxZFwB3nnx38tvrqvqixkpkkc6TB1cQGQ4ADaeJUzp/WAscYogC8WxOIuyPLZb5b+zYMu+vtj01Zvef5/wBLup1mXXWjHijp77p6sroogMTmNFvVF9v2GjN27YF1ifJJ1W4GnfILuI7IgcvvG/YqGyEOJc973vdtc83J7BbIDbkMl7txN2PeOTndnaudPGab9K9Pf6J+6J2+rr+3/V8bRRnr3kP69iO5gAaPBRmt9ZUxU5NMBjuBfK7WEG7o2uyLr245blWxXzDZLJb7RXlLK53We5x/WJO7bmct/iovxmnL8sdWeLhVq3ibTExHqrh0dUyEudcucbkufdxJ4kXK8xoGYHrNH4v5VZmvPw/9I911y7a+8u/GW8dI2iEJT6Kkb1XNDtxGIZ8w3kpqgr9KQkYaq4G57i4H8bCR3ELsG24LIa2+5K6/LHZry2i8fPET+8RKwaH1unFxUMjI4sJB7wclbdH6RjmF2OvbaN45haycAMrrrR6TdTyte07D4g7WlXMHFctbRGTrHrDk6jh+PJEzj6T6NtIvKlqGyMa9pBa4XBC9V6N58REQEREBERAREQeNU+zHG9rBVfT5dGQ9rJXNeM/RtJAcNpIGy9/ep7S1S0YYy4Bz72BO3DbZxzIWKwvG9BUnacYOs2XZf1mP28LWWXo2t/KCWw3yAJcWuAbxDiQLnsVlEz/pLh73HaVIjho3b+nd+AYe4bfan5uf/qG/sj/2KQAHBMI7fEoMEUUg+eYfuH+dHU8w2GI97h5FZ2Fvb/XMrn0Y4lBCVcUrgWvp4nt4F1we4sUA3VmKKQTxUbo3i9sEgwi4sbMcC0ZXGQCvXoRxP9dy59H2+xTEzHZGyomoqW7YCR4Hxv5LlleD145Gd1x+7c+xW7Cew/12rjC3e0d4UJVltXEfltB4HI+BzXuc+0KwehZ9FpHAgELxdoynPzTB9j1D4ssoETHKG7u1UuvYWyvBzu4uB4hxLgfafArYcuhx83IR+q/1m9zusO+6gtK6vTzEWaxpaTZxcQ0g7QLA78x5KjxDTTnxbV7x1he0GpjDk3t2norMTF7DuWadWKlu+PucfbdoXP8AZ+p4NHNw8rrgfAZ/yS7fxuH80MAgAXuF5GUdqlv7NVB3xDm4+TCuo1Tmvm+EDse/3ejSOG55/CfH4I/EiHyi21I6hu9Tp1QJ2zNHJhP8TV3bqZHvmfza1o9+Jba8Jzz4esMLcTwefpKvVFc3YLriGtG3NWQanQjMzVB74/8ArXoNXI27A9/2n2/4tW2OD5f09/w1W4rh22jdXHzOdsaVH1pLWXd1i7C1ozc4nY0c/YrXM2mjODCHyONhEwue8nha9vGym9X9TY2yCpqI2eltZkbc2RDtPy38XbNw4qzj4TMT80/2Vr8Ujb5YTeq1K6KkhY/rBgvzOfmpVEXajo489RERAREQEREBERBU9ctXJqlwkjcCWi2A5cT6p2ePiqia6vpDhfjA3CQXb3OPkVtOqjkPUeG82381D1ejq1wIbUMHNpQVKn16t/iw97D/AAu+KkodcaR21z282n+G6xa3UWrk+epxyYR42Gaj39HFdumpe8P8k3FjbrJSHZM3vDh7wvZmmaY/Px97h5qrDo5rrZy0t+N5LeGHzXaDo7rR15aY8sY9haUFtbpOn3TxftG/Fd26Rh+ui/G34qqM6PKrfJB3F5/gXoOjuo+ui/e+CkWsVcX1jPxD4ru2oj+mzxHkqPTdHVeHOL6imc0m4aGvGHsxWOLvHwXefo7rS5pbPTNAPrAh5LhwByw+B8jAu/5Sz6bfxBc/lce97PxD4qnHo+qd0kP73uwrpS9HlWG+vNA53FrXNHhn70FxNVD9bGPvC3vXi7ScA2zxfjb8VTqjo6ry8FlTTNaPklj3E8buuPcld0dV7haKpp4jvdgc88gCAB4FBbjpin+vh/G34p+facf5iH8bfiqmOj6vw29PSl1rYsL7X44PK6wqToy0mwnHWUsgP0onC3Ist7U3Fzm1ho/r2A9lz7gsR2tVEPnCeTH/AAVVZ0YaTDi78ups/k+idhbmOrnfszJ2rI/u50n/AKykHKF/m5NxOu1vo9xeeTHea8na5025kx+6PNyrH90WkfSGT85tDj+o63LBfDbuWRN0TV0gwyaSaRwEVvc4JuJd2u8XyYZD3t8iVjnXdxOFlK4k5AYtvcGqPp+hudmzSJF9toyL8/0mazYeiR426RkP/j+MiDpHrLXzG0dKWZ29eN4P7+Ed6ltHaBqqgE1dSYxuYwsz+1hNrc79y5pejbB/nZj90fzKXpdT2s21Ex8PggydXtXKWku5hxPORe4jFb6LbZAe9ToIUVFoGMfOSnmR5NWQzRUQ3E8yfJBnIukcYaLD+vFd0BERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQf//Z"
                                alt="thumbnail"
                            />
                            <Media.Body>
                                    <h5>New Balance</h5>
                                    <p>Bodega New Balance 998 Mass Transit Release date NB1 sneaker boston limited edition multicolor</p>
                                    <Row className="show-grid">
                                        <Col md={6}>
                                            <strong> {`$${this.props.price}`}</strong>
                                            <br />
                                            <strong className="price-strike"> {`$${this.props.price}`} </strong>
                                        </Col>
                                        <Col md={6}> Qty: 1 </Col>
                                    </Row>
                            </Media.Body>
                        </Media>
                    </Card>
                </div>
          </Collapse>
      </div>
    );
  }
}
