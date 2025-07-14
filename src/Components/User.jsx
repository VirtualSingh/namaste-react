import { Component } from "react";
import Shimmer from "./Shimmer";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileData: null,
    };
  }

  render() {
    const profileData = this.state.profileData;

    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
      });
    };

    const getYearsActive = () => {
      const created = new Date(profileData.created_at);
      const now = new Date();
      const years = Math.floor(
        (now - created) / (365.25 * 24 * 60 * 60 * 1000)
      );
      return years;
    };

    const styles = {
      container: {
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        padding: "3rem 1rem",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      },
      profileCard: {
        maxWidth: "800px",
        margin: "0 auto",
        background: "rgba(255, 255, 255, 0.9)",
        borderRadius: "20px",
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
      },
      header: {
        padding: "4rem 3rem 3rem",
        textAlign: "center",
        background:
          "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
        borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
      },
      avatar: {
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        margin: "0 auto 2rem",
        display: "block",
        border: "3px solid rgba(255, 255, 255, 0.8)",
        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease",
      },
      name: {
        fontSize: "2rem",
        fontWeight: "300",
        color: "#2c3e50",
        marginBottom: "0.5rem",
        letterSpacing: "1px",
      },
      username: {
        fontSize: "1rem",
        color: "#7f8c8d",
        marginBottom: "1rem",
        fontWeight: "400",
      },
      bio: {
        fontSize: "1.1rem",
        color: "#34495e",
        marginBottom: "1.5rem",
        fontWeight: "300",
        lineHeight: "1.6",
      },
      location: {
        fontSize: "0.9rem",
        color: "#95a5a6",
        fontWeight: "400",
        letterSpacing: "0.5px",
      },
      content: {
        padding: "3rem",
      },
      statsContainer: {
        marginBottom: "3rem",
      },
      statsGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
        gap: "2rem",
      },
      statItem: {
        textAlign: "center",
        padding: "1.5rem 1rem",
        background: "rgba(255, 255, 255, 0.6)",
        borderRadius: "12px",
        border: "1px solid rgba(0, 0, 0, 0.05)",
        transition: "all 0.3s ease",
      },
      statNumber: {
        fontSize: "2.5rem",
        fontWeight: "200",
        color: "#2c3e50",
        marginBottom: "0.5rem",
        display: "block",
      },
      statLabel: {
        fontSize: "0.85rem",
        color: "#7f8c8d",
        fontWeight: "400",
        letterSpacing: "0.5px",
        textTransform: "uppercase",
      },
      timelineSection: {
        marginBottom: "3rem",
      },
      sectionTitle: {
        fontSize: "1.2rem",
        fontWeight: "300",
        color: "#2c3e50",
        marginBottom: "2rem",
        textAlign: "center",
        letterSpacing: "1px",
      },
      timelineGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "1.5rem",
      },
      timelineItem: {
        padding: "1.5rem",
        background: "rgba(255, 255, 255, 0.4)",
        borderRadius: "12px",
        border: "1px solid rgba(0, 0, 0, 0.05)",
        textAlign: "center",
      },
      timelineLabel: {
        fontSize: "0.8rem",
        color: "#95a5a6",
        textTransform: "uppercase",
        letterSpacing: "0.5px",
        marginBottom: "0.5rem",
      },
      timelineValue: {
        fontSize: "1rem",
        color: "#34495e",
        fontWeight: "400",
      },
      footer: {
        textAlign: "center",
        paddingTop: "2rem",
        borderTop: "1px solid rgba(0, 0, 0, 0.05)",
      },
      githubLink: {
        display: "inline-block",
        padding: "0.8rem 2rem",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        textDecoration: "none",
        borderRadius: "25px",
        fontSize: "0.9rem",
        fontWeight: "400",
        letterSpacing: "0.5px",
        transition: "all 0.3s ease",
        boxShadow: "0 4px 15px rgba(102, 126, 234, 0.3)",
      },
      divider: {
        height: "1px",
        background:
          "linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.1), transparent)",
        margin: "2rem 0",
        border: "none",
      },
    };

    return !this.state.profileData ? (
      <Shimmer />
    ) : (
      <div style={styles.container}>
        <div style={styles.profileCard}>
          <div style={styles.header}>
            <img
              src={profileData.avatar_url}
              alt="Profile Avatar"
              style={styles.avatar}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.05)";
                e.target.style.boxShadow = "0 12px 40px rgba(0, 0, 0, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.1)";
              }}
            />
            <h1 style={styles.name}>{profileData.name}</h1>
            <p style={styles.username}>@{profileData.login}</p>
            <p style={styles.bio}>{profileData.bio}</p>
            <p style={styles.location}>{profileData.location}</p>
          </div>

          <div style={styles.content}>
            <div style={styles.statsContainer}>
              <div style={styles.statsGrid}>
                <div
                  style={styles.statItem}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 25px rgba(0, 0, 0, 0.1)";
                    e.currentTarget.style.background =
                      "rgba(255, 255, 255, 0.8)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.background =
                      "rgba(255, 255, 255, 0.6)";
                  }}
                >
                  <span style={styles.statNumber}>
                    {profileData.public_repos}
                  </span>
                  <span style={styles.statLabel}>Repositories</span>
                </div>

                <div
                  style={styles.statItem}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 25px rgba(0, 0, 0, 0.1)";
                    e.currentTarget.style.background =
                      "rgba(255, 255, 255, 0.8)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.background =
                      "rgba(255, 255, 255, 0.6)";
                  }}
                >
                  <span style={styles.statNumber}>{profileData.followers}</span>
                  <span style={styles.statLabel}>Followers</span>
                </div>

                <div
                  style={styles.statItem}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 25px rgba(0, 0, 0, 0.1)";
                    e.currentTarget.style.background =
                      "rgba(255, 255, 255, 0.8)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.background =
                      "rgba(255, 255, 255, 0.6)";
                  }}
                >
                  <span style={styles.statNumber}>{profileData.following}</span>
                  <span style={styles.statLabel}>Following</span>
                </div>

                <div
                  style={styles.statItem}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 25px rgba(0, 0, 0, 0.1)";
                    e.currentTarget.style.background =
                      "rgba(255, 255, 255, 0.8)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.background =
                      "rgba(255, 255, 255, 0.6)";
                  }}
                >
                  <span style={styles.statNumber}>{getYearsActive()}</span>
                  <span style={styles.statLabel}>Years Active</span>
                </div>
              </div>
            </div>

            <hr style={styles.divider} />

            <div style={styles.timelineSection}>
              <h2 style={styles.sectionTitle}>Timeline</h2>
              <div style={styles.timelineGrid}>
                <div style={styles.timelineItem}>
                  <div style={styles.timelineLabel}>Joined GitHub</div>
                  <div style={styles.timelineValue}>
                    {formatDate(profileData.created_at)}
                  </div>
                </div>
                <div style={styles.timelineItem}>
                  <div style={styles.timelineLabel}>Last Updated</div>
                  <div style={styles.timelineValue}>
                    {formatDate(profileData.updated_at)}
                  </div>
                </div>
              </div>
            </div>

            <div style={styles.footer}>
              <a
                href={profileData.html_url}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.githubLink}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow =
                    "0 6px 20px rgba(102, 126, 234, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow =
                    "0 4px 15px rgba(102, 126, 234, 0.3)";
                }}
              >
                View GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  async componentDidMount() {
    // console.log(this.props.name + "CDM");
    try {
      const data = await fetch("https://api.github.com/users/virtualSingh");
      const json = await data.json();
      this.setState({ profileData: json });
    } catch (err) {
      console.error(err.message);
    }
  }
}

export default User;
