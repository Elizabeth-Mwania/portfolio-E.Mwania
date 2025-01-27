import React from "react";
import { Box, Typography, Card, CardContent, Divider,Link } from "@mui/material";
import educationConfig from "../assets/configs/educationConfig";
import Tags from "../components/Tags/Tags";
import { FaLink } from "react-icons/fa";  
const Education = () => {
    return (
        <section id="education">
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: 4,
                        mt: 4,
                        px: 2,
                    }}
                >
                    {educationConfig.map((edu) => (
                        <Card
                            key={edu.id}
                            sx={{
                                backgroundColor: "#ffffff",
                                borderRadius: "15px",
                                boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
                                maxWidth: "100%",
                                width: "80%",
                            }}
                        >
                            <CardContent>
                                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1, color: "#37474f", display: "inline-flex", alignItems: "center" }}>
                                    {edu.school}
                                    <Link href={edu.url} target="_blank" rel="noopener noreferrer" sx={{ ml: 1 }}>
                                        <FaLink size={15} color="#37474f" />
                                    </Link>
                                </Typography>
                                
                                <Typography variant="subtitle1" sx={{ color: "#546e7a", mb: 1 }}>
                                    {edu.qualification}
                                </Typography>
                                <Typography variant="body2" sx={{ color: "#78909c", mb: 2 }}>
                                    {edu.duration}
                                </Typography>
                                <Divider sx={{ mb: 2 }} />
                                <Typography variant="body2" sx={{ color: "#37474f", mb: 2 }}>
                                    {edu.description}
                                </Typography>
                                <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 1 }}>
                                    Skills Obtained:
                                </Typography>
                                <Tags tags={edu.tags} />
                            </CardContent>
                        </Card>
                    ))}
                </Box>
        </section>
    );
};

export default Education;
