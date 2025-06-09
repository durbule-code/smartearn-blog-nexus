
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    id: 1,
    title: "Top 5 Proven Ways to Earn Money Online in 2025",
    description: "Discover the most reliable methods to generate income online, from freelancing to digital products.",
    link: "/blog/5-ways-to-earn-money-online",
    readTime: "8 min read",
    category: "Getting Started"
  },
  {
    id: 2,
    title: "10 Best Online Income Ideas for Beginners",
    description: "Perfect for newcomers to online earning, these ideas require minimal startup costs and experience.",
    link: "/blog/10-online-income-ideas",
    readTime: "12 min read",
    category: "For Beginners"
  },
  {
    id: 3,
    title: "20 Legit Ways to Make Money Online Without Investment",
    description: "Start earning today with these proven methods that require zero upfront investment.",
    link: "/blog/20-legit-ways-to-earn-online",
    readTime: "15 min read",
    category: "No Investment"
  }
];

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>SmartEarn – Learn How to Earn Money Online | Your Guide to Digital Income</title>
        <meta name="description" content="Discover proven strategies to earn money online. From freelancing to passive income, learn legitimate ways to build sustainable digital income streams." />
        <meta name="keywords" content="earn money online, make money online, online income, digital income, freelancing, passive income, work from home" />
        <meta property="og:title" content="SmartEarn – Learn How to Earn Money Online" />
        <meta property="og:description" content="Your trusted guide to legitimate online income opportunities and digital wealth building strategies." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
            Your Guide to Smart Online Income Streams
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Discover proven, legitimate ways to earn money online. From side hustles to full-time income, 
            we'll show you how to build sustainable digital revenue streams.
          </p>
          <Button size="lg" asChild>
            <Link to="#blog-posts">
              Start Learning Now
            </Link>
          </Button>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section id="blog-posts" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Latest Money-Making Guides
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Step-by-step guides to help you start earning money online today. 
              All methods are tested, legitimate, and beginner-friendly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <Card key={post.id} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-primary font-medium">{post.category}</span>
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl mb-2 leading-tight">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button asChild variant="outline" className="w-full">
                    <Link to={post.link}>
                      Read Full Guide →
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Online Income Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of people who have transformed their financial future through smart online earning strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/blog/5-ways-to-earn-money-online">
                Get Started Now
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/blog/10-online-income-ideas">
                Browse All Guides
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
